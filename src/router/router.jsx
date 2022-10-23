import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import BookingPage from "../components/BookingPage/BookingPage";
import ErorPage from "../components/ErrorPage/ErorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Resister from "../components/Resister/Resister";
import Hotels from "../components/Service/Hotels/Hotels";
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
        loader: () => fetch("https://travel-zone-servar.vercel.app/places"),
        element: <Service />,
      },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/resister", element: <Resister /> },
      {
        path: "/booking/:id",
        loader: ({ params }) =>
          fetch(`https://travel-zone-servar.vercel.app/places/${params.id}`),
        element: (
          <PrivetRouter>
            <BookingPage />
          </PrivetRouter>
        ),
      },
      {
        path: `/hotels/:id`,
        loader: ({ params }) =>
          fetch(`https://travel-zone-servar.vercel.app/hotels/${params.id}`),
        element: <Hotels />,
      },
    ],
  },
]);
