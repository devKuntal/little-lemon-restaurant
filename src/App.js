import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
