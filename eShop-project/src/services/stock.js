import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export const getStockInfo = async () => {
  const querySnapshot = await getDocs(collection(db, "stock"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

  const dataToReturn = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  console.log(dataToReturn);
  return dataToReturn;
};

export const getFeaturedStock = async () => {
  const querySnapshot = await getDocs(collection(db, "stock"));

  const tmpData = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  const filteredData = tmpData.filter((doc) => doc.featured === true);
  return filteredData;
};
