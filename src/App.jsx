import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Error from "./pages/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reservations from "./pages/Reservations";
import Confirmation from "./pages/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
