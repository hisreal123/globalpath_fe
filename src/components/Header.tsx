import  { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CgArrowLongRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className="wrapper lg:flex lg:items-center lg:justify-between w-full h-[50px] z-50">
        {/* .mobile */}
        <div className="mobile fixed w-full">
          <div className="flex py-4  lg:px-0 justify-between items-center px-8 md:hidden">
            <Link to="/home">
              {/* <img src={logo} alt="logo" className="block h cursor-pointer" /> */}
              <h1> logo</h1>
            </Link>
            <CiMenuBurger
              className="block cursor-pointer md:hidden lg:h-12 text-xl h-8 w-9 "
              onClick={() => {
                setOpenNav(!openNav);
              }}
            />
          </div>

          {/* mobile device  */}
          {openNav && (
            <div className="fixed md:hidden top-0 bottom-0 right-0 left-0 bg-white  lg:hidden flex flex-col py-20">
              <div className="l absolute top-5 flex justify-between items-center w-full px-8">
                <Link to="/">
                  {/* <img src={logo} alt="logo" className="block h cursor-pointer" /> */}
                  <h1> logo</h1>
                </Link>

                <CgClose
                  className="block cursor-pointer h-8 w-9  right-4 md:hidden"
                  onClick={() => {
                    setOpenNav(!openNav);
                  }}
                />
              </div>
              {[
                { name: "Home", link: "/" },
                { name: "Find jobs", link: "/find_jobs" },
                { name: "About Us", link: "/about" },
                { name: "Blog", link: "/blog" },
              ].map(({ name, link }, index) => (
                <div className="w-[80%] mx-auto" key={index}>
                  <Link
                    to={link}
                    key={index}
                    className="block py-4  font-bold hover:bg-white/75 w-full"
                    onClick={() => {
                      setOpenNav(!openNav);
                    }}
                  >
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Large screens */}
        <div className="medium hidden md:flex z-50 w-full justify-between items-center fixed lg:py-6 lg:px-10 top-0">
          <Link to="/">
            {/* <img src={logo} alt="logo" className="block h cursor-pointer" /> */}
            <h1 className="font-bold"> Logo</h1>
          </Link>

          <div className="hidden lg:flex backdrop:lg:relative lg:bg-none space-x-4 ">
            {[
              { name: "Home", link: "/" },
              { name: "Find jobs", link: "/find_jobs" },
              { name: "About Us", link: "/about" },
              { name: "Blog", link: "/blog" },
            ].map(({ name, link }, index) => (
              <div className=" " key={index}>
                <Link
                  to={link}
                  key={index}
                  className={`${
                    location.pathname === name
                      ? "text-blue-500"
                      : "text-gray-900"
                  }  block  py-2 px-3  w-full text-center text-sm font-semibold leading-6 `}
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>

          <div className="sign flex items-center  space-x-2 group">
            <Link to="/auth/signin" className="block font-bold">
              {" "}
              user profile{" "}
            </Link>
            <CgArrowLongRight className="group-hover:translate-x-3 cursor-pointer transition-all delay-75 duration-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
