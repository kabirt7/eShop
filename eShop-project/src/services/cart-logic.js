import {
  doc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
  setDoc,
  increment,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { getStockByID } from "./stock";

// TO FIX
// needs to check if item is in stock or not before submitting
// can maybe disable button when this is true
// use react hook form to 'watch' the values in the page
// when the value(s) are established/changed, onChange will trigger a function that sets the state with the values
// then use this to trigger a useEffect that sends API call through getQty function
// according to response set another state to true or false, this will determine if the add to cart button has the disabled class or not
// the useeffect needs to also be triggered by handleSubmit

export const addToCart = async (itemID, color, size) => {
  // this function checks  cart if it should incremenet qty or add new object
  // deconstruct info to add to object (if item isn't already in cart)
  const itemRef = await getStockByID(itemID, "stock");
  console.log(itemRef);
  const { name } = itemRef;
  const cleanedName = name.toLowerCase();
  console.log(cleanedName, color, size);

  // this is for if a new cart object needs to be created
  let objToExport = null;

  // this is for if an existing cart item needs to be updated
  let cartItemRef = null;
  let cartQty = null;
  const cartRefCheck = collection(db, "cart");
  let cartRef = doc(cartRefCheck);

  const stockItemRef = doc(db, "stock", itemID);
  const path = `variants.${color}.${size}`;
  const stockQty = await getStockQty(color, size, itemID);
  console.log(stockQty);

  // make an array that compares item passed through from ref with cart items
  // const querySnapshot = await getDocs(collection(db, "cart"));
  // const dataArray = querySnapshot.data();

  const cartQuery = query(
    cartRefCheck,
    where("itemName", "==", cleanedName),
    where("itemColor", "==", color),
    where("itemSize", "==", size)
  );

  const querySnapshot = await getDocs(cartQuery);
  const cartItemData = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  console.log(cartItemData);

  // querySnapshot.docs.map((doc) => ({
  //   // id: doc.id,
  //   ...doc.data(),
  // }));

  // console.log(dataArray);
  // const filteredArray = dataArray.filter(
  //   (doc) =>
  //     doc.itemName == cleanedName &&
  //     doc.itemColor == cleanedColor &&
  //     doc.itemSize == cleanedSize
  // );
  // console.log(filteredArray);

  // if the item isn't there then fA[0] will be undef

  const isItemAlreadyInCart = cartItemData[0] === undefined ? false : true;

  if (isItemAlreadyInCart) {
    // this is wrong because each size and color needs its own new ID
    // this id will be returned from the filtered array me thinks
    // changed it, testing
    const cartItemID = cartItemData[0].id;
    cartItemRef = doc(db, "cart", cartItemID);
    await updateDoc(cartItemRef, {
      quantity: increment(1),
    });
  }

  if (!isItemAlreadyInCart) {
    objToExport = {
      itemName: name,
      itemColor: color,
      itemSize: size,
      quantity: 1,
    };

    await setDoc(cartRef, objToExport);
  }
  // use increment
  // use
  await updateDoc(stockItemRef, {
    [path]: increment(-1),
  });
};

export const getStockQty = async (itemColor, itemSize, itemID) => {
  const cleanedColor = itemColor.toLowerCase();
  const cleanedSize = itemSize.toLowerCase();
  const itemRef = doc(db, "stock", itemID);
  const docSnap = await getDoc(itemRef);
  const info = docSnap.data();
  const qty = info.variants[cleanedColor][cleanedSize];
  console.log(qty);
  return qty;
};

// export const getCartQty = async (itemID) => {
//   const itemRef = doc(db, "cart", itemID);
//   const docSnap = await getDoc(itemRef);
//   const info = docSnap.data();
//   const qty = info.quantity;
//   return qty;
// };

// export const searchCart = async (name, color, size) => {

//   return querySnapshot;

//   // const dataToReturn = querySnapshot.docs.map((doc) => {
//   //   return {
//   //     id: doc.id,
//   //     ...doc.data(),
//   //   };
//   // });

//   // return dataToReturn;
// };

// export const checkQuantity = async;
// const path = `variants.${itemColor}.size.${itemSize}`;
// const qty = await getQty(itemColor, itemSize, itemID);
// if (qty > 0) {
//   await updateDoc(itemRef, {
//     [path]: qty - 1,
//   });
// }
// find item needed using ID, make that a param
// check its quantity - might have to use the function below
// increment its quantity by use
