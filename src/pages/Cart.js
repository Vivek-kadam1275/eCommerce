import React, { useEffect, useState } from "react"
import CartProduct from "../components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {

  const cart = useSelector((state) => (state.cart));
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
     setTotalAmount( cart.reduce((accumulator,current)=>(accumulator+current.price),0)
    )
  },[cart])
  return (
    <div>

      {cart.length > 0 ? (<div>
        {
          cart.map((product) => {
            return (<CartProduct product={product} key={product.id} />)
          })
        }
        <div>
          <p>Your Cart</p>
          <p>Summary</p>
          <p>Total items <span>{cart.length }</span></p>
          <div>
            <p>Total amount:<span>{totalAmount }</span></p>
            <button>Checkout Now</button>
          </div>
        </div>
      </div>) : (

        <div className="w-screen h-[500px] flex  flex-col justify-center items-center gap-4">
          <h1 className="text-[#1c903c] font-bold text-3xl">Your Cart is empty</h1>
          <button onClick={() => {
            navigator("/");
          }} className="text-xl text-gray-500 ">Shop Now!!!</button>
        </div>)}



    </div>
  )
};

export default Cart;
