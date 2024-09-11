import React, { useEffect, useState } from "react"
import Product from "../components/Product";

const Home = (props) => {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);

  const  fetchProducts= async() => {
    try{
       setLoading(true);
      const result = await fetch("https://fakestoreapi.com/products");
      const data = await result.json();
      // console.log(data);
      setProducts(data);
      setLoading(false);
    }
    catch(err){
      console.log(err);
    }
  }
 useEffect(()=>{
    fetchProducts();
    // console.log(products);

     
 },[])
  return (
    <div>
      {loading? (<div className="  w-screen h-screen items-center  flex justify-center"><div className="spinner "></div></div>):(
        <div className="flex flex-wrap w-10/12 max-w-[1080px] mx-auto gap-4 justify-center">
          {products.map((product)=>(
            <Product product={product} key={product.id}/>
          ))}
        </div>
      )}
    </div>
  )
};

export default Home;
