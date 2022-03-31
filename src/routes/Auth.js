import React, { useState } from "react";
import myService from "firebaseConfig";

const Auth = () => {
  const authService = myService.authService;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") setEmail(value);
    else setPassword(value);
  };
  const onSubmit = async event => {
    event.preventDefault();
    let authData;
    try {
      if (newUser) {
        authData = await authService.createUserWithEmailAndPassword(
          authService.auth,
          email,
          password
        );
      } else {
        authData = await authService.signInWithEmailAndPassword(
          authService.auth,
          email,
          password
        );
      }
      console.log(authData);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };
  const onClick = event => {
    setNewUser(prev => !prev);
  };
  const onSocialClick = async event => {
    console.log(event.target.name);
    let provider;
    if (event.target.name === "google")
      provider = new authService.GoogleAuthProvider();
    else provider = new authService.GithubAuthProvider();
    const authData = await authService.signInWithPopup(
      authService.auth,
      provider
    );
    console.log(authData);
  };
  return (
    <>
      <div>
        <div>
          {newUser ? (
            <span onClick={onClick}>Sign In</span>
          ) : (
            <span onClick={onClick}>Sign Up</span>
          )}
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={onChange}
            />
            <input type="submit" value={newUser ? "Create User" : "Log In"} />
            {errorMessage}
          </form>
        </div>
      </div>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue With Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue With Github
        </button>
      </div>
    </>
  );
};
export default Auth;
