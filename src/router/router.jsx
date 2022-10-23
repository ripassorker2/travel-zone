import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import BookingPage from "../components/BookingPage/BookingPage";
import ErorPage from "../components/ErrorPage/ErorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Resister from "../components/Resister/Resister";
import Service from "../components/Service/Service";
import Main from "../Main/Main";
import PrivetRouter from "./PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/service",
        loader: fetch(""),
        element: <Service />,
      },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/resister", element: <Resister /> },
      {
        path: "/booking",
        element: (
          <PrivetRouter>
            <BookingPage />
          </PrivetRouter>
        ),
      },
    ],
  },
]);
