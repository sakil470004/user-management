import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../Eror/Page404";

import UserTable from "../UserTable/UserTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            {" "}
            <Home></Home>
          </PrivateRoute>
        ),
      },

      {
        path: "/table",
        element: (
          <PrivateRoute>
            {" "}
            <UserTable></UserTable>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "*",
    element: <Page404 />,
  },
]);
