import React from "react";
import {BiPlus} from "react-icons/bi"

function Productitem({ product }) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">

        <button className="absolute top-2 right-1 w-6 h-6 flex items-center justify-center border border-gray-200 rounded-lg transition-colors bg-white text-brand-color shadow-md hover:border-brand-color">
            <BiPlus/>
        </button>
      <img src={product.image} alt={product.title} />
      <div className=" text-brand-color">{product.price}</div>
      <div className=" text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
}

export default Productitem;
