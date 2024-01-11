import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy as firestoreOrderBy,
    query as firestoreQuery,
    where,
  } from "firebase/firestore";
  
import { db } from "./firebase";

const TABLE = "Users";

  export const getUsers = async () => {
    const usersCollection = collection(db, TABLE);

    const snapshot = await getDocs(usersCollection);

    const getUsers = snapshot.docs.map((doc) => {
      const id = doc.id;
      const user = doc.data();
      return {
        id: id,
        userName: user.userName,
        password: user.password,
      };
    });
    return getUsers;
  };

  export const checkUserExists = async (username, password) => {
    const usersCollection = collection(db, TABLE);
  
    const query = firestoreQuery(usersCollection, 
      where("userName", "==", username),
      where("password", "==", password));
      
    const snapshot = await getDocs(query);
  
    return !snapshot.empty; 
  };

