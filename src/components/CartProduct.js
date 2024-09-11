import React from "react"
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { FaDollarSign } from "react-icons/fa6";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className=" flex py-10 gap-12 max-w-[670px]  cart-product-res border p-2">
      <div  >
        <img src={product.image} alt="image" className="w-36 h-44" />
      </div>
      <div className="w-8/12" >
        <p className="text-2xl font-bold product-title-res">{product.title}</p>
        <p className="text-gray-600">{product.description}</p>
        <div  className="flex justify-between">
          <p  className="flex gap-1 items-center text-[#1d9340] font-extrabold">  <FaDollarSign /><div>{product.price}</div></p>
          <RiDeleteBinFill onClick={() => {
            dispatch(remove(product.id));
          }} className="w-10 h-10 rounded-full p-3 text-3xl bg-[#f7c5cb] text-[#890d25] hover:text-black  cursor-pointer"/>

        </div>


      </div>
    </div>
  )
};

export default CartProduct;
