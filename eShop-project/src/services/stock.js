import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
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

  return dataToReturn;
};

export const getFeaturedStock = async () => {
  const stockRef = collection(db, "stock");

  const stockQuery = query(stockRef, where("featured", "==", true));

  const querySnapshot = await getDocs(stockQuery);
  const dataToReturn = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataToReturn;
};

export const getStockByID = async (id, collection) => {
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    throw new Error("Item not found");
  }
  const obj = { id: docSnap.id, ...docSnap.data() };
  return obj;
};

// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

// const querySnapshot = await getDocs(stockRef);

// const tmpData = querySnapshot.docs.map((doc) => {
//   return {
//     id: doc.id,
//     ...doc.data(),
//   };
// });

// const filteredData = tmpData.filter((doc) => doc.featured === true);
