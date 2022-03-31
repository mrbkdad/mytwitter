import React, { useState, useEffect } from "react";
import myService from "firebaseConfig";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const dbService = myService.dbService;
  const collectionPath = "mytwitter";
  const [message, setMessage] = useState("");
  const [dbData, setDbData] = useState([]);
  const getDataFromDb = async () => {
    console.log("Read Data From DB...");
    const docRef = await dbService.getDocs(
      dbService.collection(dbService.db, collectionPath)
    );
    // docRef.docs.forEach(doc => {
    //   console.log(doc.data());
    //   setDbData(prev => [doc.data(), ...prev]);
    // });
    setDbData(docRef.docs.map(doc => doc.data()));
    console.log("End Data From DB...");
  };
  useEffect(() => {
    //getDataFromDb();
    dbService.onSnapshot(
      dbService.collection(dbService.db, collectionPath),
      snapshot => {
        console.log(snapshot);
        getDataFromDb();
      }
    );
  }, []);
  const onSubmit = async event => {
    event.preventDefault();
    console.log(message);
    const uuid = uuidv4();
    const newdata = {
      id: uuid,
      message,
      createAt: dbService.timestamp.fromDate(new Date()),
    };
    //console.log(newdata);
    //await dbService.setDoc(dbService.doc(dbService.db, collectionPath, uuid), newdata);
    await dbService.addDoc(
      dbService.collection(dbService.db, collectionPath),
      newdata
    );
    setMessage("");
  };
  const onChange = event => {
    const {
      target: { value },
    } = event;
    setMessage(value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={message}
          placeholder="input your mind!"
        />
        <input type="submit" value="write" />
      </form>
      <div>
        <ul>
          {dbData.map(d => (
            <li id={d.id} key={d.id}>
              {d.message}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Home;
