import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-bar flex justify-between items-center w-full p-3 bg-blue-900">
      <div className="logo text-2xl text-white font-bold">BrowseMart</div>
      <div className="input w-5/12 border border-white">Input</div>
      <div className="links flex gap-4 justify-around text-white font-semibold text-lg">
        <Link to={"/"}>
          <div>Home</div>
        </Link>
        <Link to={"/allproduct"}>
          <div>Product</div>
        </Link>
        <Link>
          <div>Cart</div>
        </Link>
        <Link>
          <div>Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
