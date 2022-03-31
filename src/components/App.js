import React, { useEffect, useState } from "react";
import AppRouter from "components/Route";
import myService from "firebaseConfig";

function App() {
  const authService = myService.authService;
  const [isLogin, setLogin] = useState(false);
  const [isInit, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged(authService.auth, user => {
      if (user) setLogin(true);
      else setLogin(false);
      console.log(user);
      setInit(true);
    });
    //setInit(true);
  }, []);
  return (
    <>
      {isInit ? <AppRouter isLogin={isLogin} /> : "Loading..."}
      <footer>&copy; 2022 by MRBKDAD</footer>
    </>
  );
}

export default App;
