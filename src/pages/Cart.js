import React, { useEffect, useState } from "react"
import CartProduct from "../components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";
import toast from "react-hot-toast";
const Cart = (props) => {

  const cart = useSelector((state) => (state.cart));
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((accumulator, current) => (accumulator + current.price), 0)
    )
  }, [cart])
  return (
    <div className="max-w-[1080px] w-10/12 mx-auto pt-4">

      {cart.length > 0 ? (<div className="flex gap-10 cart-res">
        <div className="w-8/12 flex flex-col gap-4">
          {
            cart.map((product) => {
              return (<CartProduct product={product} key={product.id} />)
            })
          }
        </div>
        <div className="w-4/12 h-[650px] pt-20 pb-4 flex flex-col justify-between summary-res">
          <div className="flex flex-col gap-2">
            <p className="text-[#1d9340] font-bold text-wrap  text-2xl">Your Cart</p>
            <p className="text-[#1d9340] font-bold text-wrap text-7xl cart-summary-res">Summary</p>
            <p className="text-gray-600 font-semibold text-wrap flex gap-2"><span>Total items:</span>
              <span className="flex  items-center">  {cart.length} </span></p>
          </div>


          <div className="flex flex-col gap-2">
            <p className="text-2xl flex cart-amount-res"><span>Total amount:</span><span className="flex gap-1 items-center cart-amount-res"><FaDollarSign />{totalAmount}</span></p>
            <button className="bg-[#1d9340] w-full py-2 text-1xl text-white font-bold" onClick={
              () => {
                toast.success("We will place your order soon of " + cart.length + " items")
              }
            }>Checkout Now</button>
          </div>

        </div>
      </div>) : (

        <div className=" h-[500px] flex  flex-col justify-center items-center gap-4">
          <h1 className="text-[#1c903c] font-bold text-3xl">Your Cart is empty</h1>
          <button onClick={() => {
            navigator("/");


          }} className="text-xl text-gray-500 hover:text-black"  >Shop Now!!!</button>
        </div>)}



    </div>
  )
};

export default Cart;
