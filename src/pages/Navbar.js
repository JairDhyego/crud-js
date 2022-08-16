import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-ful h-16 flex items-center px-14 justify-between bg-blue-600">
        <Link
          to={"/"}
          className="text-3xl text-white font-semibold font-Montesarrat"
        >
          CRUD 
        </Link>
        <Link
          to={"/add-user"}
          className="hover:bg-blue-600
            hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
        >
          Add Usuários
        </Link>
      </div>
    </>
  );
}

export default Navbar;
