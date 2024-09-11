import React from "react"
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
 const Navbar = (props) => {
  const navigator = useNavigate();

  return (
    <div className="bg-[#10162c] py-2 ">
      <div className="flex  w-10/12 max-w-[1080px] mx-auto justify-between  flex-wrap navbar-res ">
      <img src={logo} alt="logo" className="w-48 cursor-pointer" onClick={()=>{
        navigator("/")
      }} />

        <div className="flex min-w-[200px] w-2/12  justify-between items-center text-white navbar-res">
          <div onClick={() => {
            navigator("/");
          }} className="text-3xl cursor-pointer hover:text-[#50a060]">Home</div>
          <div onClick={() => {
            navigator("/cart")
          }} className="text-3xl cursor-pointer hover:text-[#50a060]"><IoCart />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
