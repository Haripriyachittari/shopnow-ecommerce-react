import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex justify-between items-center  px-4 bg-[#3460a1] text-white shadow-xl  z-50">
      <h1 className="font-bold text-2xl">
        <Link to="/">ShopNow</Link>
      </h1>

      <ul className="  flex items-center gap-8  text-xl font-bold">
        <li>
          {" "}
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </li>
      </ul>

      {/* mobile menu */}
    </div>
  );
};

export default Navbar;
