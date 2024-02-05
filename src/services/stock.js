import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

export const getItems = async (collectionList) => {
  const querySnapshot = await getDocs(collection(db, collectionList));
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

  const filteredData = dataToReturn.filter((item) => item.id !== "DONOTDELETE");

  return filteredData;
};

const cleanPrice = (inputString) => {
  const match = inputString.match(/\$\d+/);
  return parseInt(match[0].slice(1), 10);
};

export const getTotalPrice = async () => {
  const cartItems = await getItems("cart");

  let total = 0;
  if (cartItems[0]) {
    cartItems.forEach((item) => {
      const tmp = item.quantity * cleanPrice(item.itemPrice);
      total += tmp;
    });
  }

  return total;
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

// const cartItemID = cartItemData[0].id;
// cartItemRef = doc(db, "cart", cartItemID);
// await updateDoc(cartItemRef, {
//   quantity: increment(1),

export const toggleFavourite = async (ID) => {
  console.log(ID);
  const itemRef = doc(db, "stock", ID);
  const tmp = await getDoc(itemRef);
  const obj = tmp.data();
  const currentStatus = obj.favourited;
  await updateDoc(itemRef, {
    favourited: !currentStatus,
  });
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
