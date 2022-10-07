import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Click-logo.svg";
import Logo1 from "../../assets/Click-logo.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Context } from "../../context/AdminContext";

function AdminNavbar() {
  const [nav, setNav] = useState(false);
  const { authenticated, logoutAdmin } = useContext(Context);

  return (
    <nav className="flex justify-between py-4 sm:px-[80px] px-[60px] border-b border-borrow">
      <section className="flex items-center justify-between w-[400px]">
        <div className="">
          <Link to="/">
            <img className="h-[55px]" src={Logo} alt="Logo click Beard" />
          </Link>
        </div>
        <div>
          <AiOutlineMenu
            onClick={() => setNav(!nav)}
            size={30}
            className="block right-4 top-4 cursor-pointer md:hidden"
          />
        </div>
      </section>

      {nav ? (
        <div className="bg-black/95 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {authenticated ? (
        <>
          <div
            className={
              nav
                ? "flex flex-col items-center fixed top-0 right-0 w-[250px] h-screen bg-richBlack z-10 duration-400"
                : "fixed top-0 right-[100%] w-[300px] h-screen bg-richBlack z-10 duration-400"
            }
          >
            <AiOutlineClose
              onClick={() => setNav(!nav)}
              size={30}
              className="absolute right-4 top-4 cursor-pointer"
            />
            <img className="w-[150px] my-[30px]" src={Logo1} alt="" />
            <nav className="">
              <ul className="md:flex flex-col space-y-10 items-center">
                <li className="cursor-pointer font-medium py-2 text-white sm:text-[#d6a77a] hover:text-[#775533] transition ease-in-out duration-400 sm:hover:border-b hover:border-[#775533] mx-5">
                  <Link to="/agenda-admin">Agendamentos</Link>
                </li>
                <li className="cursor-pointer font-medium py-2  text-white sm:text-[#d6a77a] hover:text-[#775533] transition ease-in-out duration-400 sm:hover:border-b hover:border-[#775533] mx-5">
                  <Link to="/barbeiros-admin">Barbeiros</Link>
                </li>
                <li
                  className="cursor-pointer font-medium py-2  text-white sm:text-[#d6a77a] hover:text-[#775533] transition ease-in-out duration-400 sm:hover:border-b hover:border-[#775533] mx-5"
                  onClick={logoutAdmin}
                >
                  Sair
                </li>
              </ul>
            </nav>
          </div>

          <div className="hidden md:flex">
            <ul className="md:flex md:items-center">
              <li className="cursor-pointer font-medium py-2 text-[#d6a77a] hover:text-[#775533] transition ease-in-out duration-400 hover:border-b hover:border-[#775533] mx-5">
                <Link to="/agenda-admin">Agendamentos</Link>
              </li>
              <li className="cursor-pointer font-medium py-2 text-[#d6a77a] hover:text-[#775533] transition ease-in-out duration-400 hover:border-b hover:border-[#775533] mx-5">
                <Link to="/barbeiros-admin">Barbeiros</Link>
              </li>

              <li
                className="cursor-pointer font-medium py-2 text-[#d6a77a] hover:text-[#775533] transition ease-in-out duration-400 hover:border-b hover:border-[#775533] mx-5"
                onClick={logoutAdmin}
              >
                Sair
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </nav>
  );
}

export default AdminNavbar;
