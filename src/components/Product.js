import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { FaDollarSign } from "react-icons/fa6";

const Product = ({ product }) => {
  const cart = useSelector((state) => (state.cart));
  const dispatch = useDispatch();

  return (
    <div className="w-[250px] flex flex-col py-4 px-6 border mt-4 gap-4 items-center justify-center hover:scale-110 transition-all duration-300">

      <div className="font-bold">
        {product.title.length > 17 ?
          <div>{product.title.substring(0, 17)}... </div> :
          <div>{product.title}</div>}
      </div>
      <div className="">
        {product.description.length > 51 ?
          <div>
            {product.description.substring(0, 51)}
          </div> : <div>{product.description}</div>}
      </div>
      <img src={product.image} alt={product.image} className="w-24 h-28" />


      <div className="flex gap-8 items-center">
        <div className="text-[#50a060] font-bold flex  items-center"> <FaDollarSign />
        {product.price}</div>

        <div className="border border-black py-1 px-2 rounded-2xl">
          {cart.some((item) => (item.id == product.id)) ? (
            <button onClick={() => {
              dispatch(remove(product.id))
            }}>Remove Item</button>
          ) : (
            <button onClick={() => {
              dispatch(add(product))
            }}>Add to Cart</button>
          )
          }

        </div>
      </div>



    </div>
  )
};

export default Product;
