import { useState } from "react";

export default function AdminAddProductpage(){

const[productId,setProductID]=useState("");
const[name,setName]=useState("");
const[price,setPrice]=useState("");
const[altNames,setAltNames]=useState("");
const[description,setDescription]=useState("");
const[labelledPrice,setlabeledPrice]=useState("");
const[images,setImages]=useState("");
const[category,setCategory]=useState("");
const[brand,setBrand]=useState("");
const[model,setModel]=useState("");
const[stock,setStock]=useState(0);
const[isAvailable,setIsAvailable]=useState(false);

   return(
    <div className="w-full h-full flex justify-center items-start overflow-y-scroll pt-13 text-4xl">
      <div className="h-280 w-150 bg-secondary/50 rounded-2xl p-10">

      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable>Product ID</lable>
         <input type="text" value={productId} onChange={(e)=>{setProductID(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5"/>
                  <p className="text-sm text-grey-500 w-full  text-right" >Provide a unique product ID</p>

      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable>Name</lable>
         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5"/>

      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable>Alternative Names</lable>
         <input type="text" value={altNames} onChange={(e)=>{setAltNames(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5"/>
         <p className="text-sm text-grey-500 w-full  text-right" >Sepetate multiple names with coma seperated</p>
      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable>Description</lable>
         <textarea type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5"/>

      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable>Price</lable>
         <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5"/>

      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable>labelledPrice</lable>
         <input type="number" value={labelledPrice} onChange={(e)=>{setlabeledPrice(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5"/>

      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable>Images</lable>
         <input type="text" value={images} onChange={(e)=>{setImages(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5"/>

      </div>

         <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable>Images</lable>
         <input type="text" value={images} onChange={(e)=>{setImages(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5"/>

      </div>
      </div>

    </div>
   )
}