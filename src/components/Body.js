import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../utility/Slice";
const Body = () => {
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, emailId, DisplayName } = user.uid;
        dispatch(adduser({ uid, emailId, DisplayName }));
      } else {
        dispatch(removeuser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
