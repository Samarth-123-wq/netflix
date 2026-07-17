import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ffa9d590-69c5-406f-bff9-e2ced3baa6ad/web/IN-en-20260713-TRIFECTA-perspective_75c0557e-9bbb-4149-9913-b87d4d7a30b7_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute mx-80 my-36 w-3/12 bg-black right-0 left-0 p-12 text-white rounded-lg bg-opacity-50">
        <h1 className="font-bold text-3xl py-4">Sign In </h1>
        <input
          type="text"
          placeholder="Email Address"
          className=" bg-gray-700 w-full p-4 my-4"
        />
        <input
          type="password"
          placeholder="password"
          className=" bg-gray-700 w-full p-4 my-4"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4">New to NetFlix ? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;
