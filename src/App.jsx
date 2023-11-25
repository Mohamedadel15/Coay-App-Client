import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useContext } from "react";




import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import New from "./pages/New";
import Stay from "./pages/Stay";
import StayLayoutPage from "./layouts/StayLayoutPage";
import Pages from "./pages/Pages";
import dark_LanguageContext from "./store/UseDarkAndLangContext";
import Reservations from "./pages/Reservations";
import ErrorBoundary from "./pages/ErrorBoundary";
import RoomsPage from "./pages/RoomsPage";
import RoomDetails from "./pages/RoomDetails";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";


import { loader as getRoomsLoader } from "./components/intro/home/DescoverAll";
import { loader as getFilterRoomsLoader } from "./pages/RoomsPage";
import { loader as getRoomDetailLoader } from "./pages/RoomDetails";
import { loader as getStayRooms } from "./components/intro/stay/AllRooms";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        loader: getRoomsLoader,
        element: <Home />
      },
      {
        path: "new",
        element: <New />,
      },
      {
        path: "stay",
        element: <StayLayoutPage />,
        children: [
          {
            element: <Stay />,
            loader: getStayRooms,
            index: true,
          },
          {
            path: "reservations",
            element: <Reservations />,
          },
          {
            path: "rooms",
            element: <RoomsPage />,
            loader: getFilterRoomsLoader,
          },
          {
            path:"Cart",
            element:<Cart/>
          },
          {
            path:"CheckOut",
            element:<CheckOut/>
          }
        ]

      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "rooms/:id",
        element: <RoomDetails />,
        loader: getRoomDetailLoader
      }
    ]
  }
]);

export default function App() {
  const { lang, dark } = useContext(dark_LanguageContext)
  if (dark === "dark") {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  return (
    <div dir={lang === "en" ? "ltr" : "rtl"} className="dark:text-primary_Color dark:bg-BgDark" >
      <RouterProvider router={router} />
    </div>
  );
}
