import React from "react"
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

const CartProduct = ({product}) => {
    const dispatch=useDispatch();
  return (
    <div>
      <div>
        <img src={product.image} alt="image"/>
      </div>
      <div>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <div>
        <p>{product.price}</p>
        <RiDeleteBinFill onClick={()=>{
            dispatch(remove(product.id));
        }}/>

        </div>
        

      </div>
    </div>
  )
};

export default CartProduct;
