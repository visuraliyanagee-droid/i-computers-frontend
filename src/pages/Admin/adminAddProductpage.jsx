import { useState } from "react";

export default function AdminAddProductpage(){

const[productId,setProductId]=useState("");
const[name,setName]=useState("");
const[price,setPrice]=useState("");
const[altNames,setAltNames]=useState("");
const[description,setDescription]=useState("");
const[labelledPrice,setlabeledPrice]=useState("");
const[images,setImages]=useState("");
const[category,setCategory]=usestate("");
const[brand,setBrand]=useState("");
const[model,setModel]=useState("");
const[stock,setStock]=useState(0);
const[isAvailable,setIsAvailable]=useState(false);

   return(
    <div className="w-full h-full fles justify-center items-center text-4xl">
      <div>
         <input value={productId} onChange={(e)=>{setProductID(e.target.value)}}/>
      </div>

    </div>
   )
}