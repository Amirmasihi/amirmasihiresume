import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [open ,setOpen] = useState(false)
  return (
    <>
      <header className="flex justify-between items-center w-full h-12 py-16 px-8">
        <div className="">
          <img src="/images/logo.png" alt="logo" className="w-32 h-32" />
        </div>
        <ul className=" gap-8 hidden md:flex">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            {" "}
            <Link to="/Contact">CONTACT</Link>
          </li>
          <li>
            {" "}
            <Link to="/Projects">PROJECT</Link>
          </li>
        </ul>
        <div className="flex md:hidden text-4xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <IoMenu />}
        </div>
      </header>
{open && (

      <div
        className="flex  md:hidden justify-center items-center  w-full h-36 bg-sky-400
      "
      >
        <ul className=" flex flex-col justify-center gap-2 md:hidden">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            {" "}
            <Link to="/Contact">CONTACT</Link>
          </li>
          <li>
            {" "}
            <Link to="/Projects">PROJECT</Link>
          </li>
        </ul>
      </div>
)}


    </>
  );
};

export default Header;
