import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utility/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utility/firebase";
import { adduser } from "../utility/Slice";
import { useDispatch } from "react-redux";
import { PROFILE_URL } from "../utility/constants";

const Login = () => {
  const [isSignUpForm, updateSignUpForm] = useState(true);
  const [errormes, seterrorms] = useState("");
  const toggleForm = () => {
    updateSignUpForm(!isSignUpForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const handleValidation = () => {
    const errormsg = validateData(email.current.value, password.current.value);
    seterrorms(errormsg);
    if (errormsg !== null) return;

    if (isSignUpForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorms(errorCode + " " + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_URL,
          })
            .then(() => {
              console.log(user);
              console.log(auth.currentUser);
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              console.log(user);
            })
            .catch((error) => {
              seterrorms(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorms(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ffa9d590-69c5-406f-bff9-e2ced3baa6ad/web/IN-en-20260713-TRIFECTA-perspective_75c0557e-9bbb-4149-9913-b87d4d7a30b7_large.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black/50 p-12 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUpForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignUpForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="bg-gray-700 w-full p-4 my-4 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="bg-gray-700 w-full p-4 my-4 rounded"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-gray-700 w-full p-4 my-4 rounded"
        />
        <p className="text-red-600 font-bold text-lg">{errormes}</p>
        <button
          onClick={handleValidation}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignUpForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4" onClick={toggleForm}>
          {isSignUpForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registreresd"}
        </p>
      </form>
    </div>
  );
};

export default Login;
