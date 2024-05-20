import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Allproductcontainer from "./Component/Allproductcontainer/Allproductcontainer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allproduct",
        element: <Allproductcontainer />,
      },
    ],
  },
]);

export default App;
