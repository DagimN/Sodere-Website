import React from "react";
import { Link } from "react-router-dom";

//Icons
import { GoSignOut } from "react-icons/go";

const UserCard = () => {
  return (
    <main className="w-96 h-28 m-5 bg-white flex shadow-lg rounded-xl justify-around">
      <div className="flex relative right-[10%]">
        <img
          src=""
          alt=""
          className="bg-black w-10 h-10 m-5 mt-7 rounded-full"
        />

        <div className="grid gap-0">
          <h1 className="text-xl mt-5"> User Name </h1>
          <h1 className="text-sm mb-10 text-[#808080]">Job Name</h1>
        </div>
      </div>

      <Link to={"/"}>
        <GoSignOut size={35} className="mt-7" />
      </Link>
    </main>
  );
};

export default UserCard;
