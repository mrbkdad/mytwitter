import myService from "firebaseConfig";
import React from "react";

const Profile = () => {
  const authService = myService.authService;
  const onClick = async event => {
    console.log("logout");
    await authService.signOut(authService.auth);
  };
  return (
    <>
      <button onClick={onClick}>Logout</button>
    </>
  );
};
export default Profile;
