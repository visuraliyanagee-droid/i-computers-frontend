import { AiFillProduct } from "react-icons/ai";

import { useState } from "react";
import toast from "react-hot-toast";
import LoginPage from "../loginPage";
import { useNavigate } from "react-router-dom";

export default function AdminAddProductpage(){
  const[productId,setProductID]=useState("");
  const[name,setName]=useState("");
  const[price,setPrice]=useState("");
  const[altNames,setAltNames]=useState("");
  const[description,setDescription]=useState("");
  const[labelledPrice,setlabeledPrice]=useState("");
  const[images,setImages]=useState("");
  const[category,setCategory]=useState("CPU");
  const[brand,setBrand]=useState("");
  const[model,setModel]=useState("");
  const[stock,setStock]=useState(0);
  const[isAvailable,setIsAvailable]=useState(true);
  const navigate = useNavigate()

  async function addProduct(){
   const token= localStorage.getItem("token");
   if(token==null){
      toast.error("you must be logged in as admin to do this operation.");
      navigate("/login");
      return;
   }
   if(productId==""||name==""||description==""||category==""||brand==""||model==""){
      toast.error("please fill in all required fields.")
      return;
   }


  }

  const inputCls = "w-full h-12 rounded-xl border-2 px-4 text-base outline-none focus:border-secondary";
  const labelCls = "text-lg font-medium mb-1 block";
  const boxHalf = "w-full md:w-[calc(50%-12px)] bg-white p-4 rounded-xl";
  const boxFull = "w-full bg-white p-4 rounded-xl";

  return(
    <div className="w-full h-full flex justify-center items-start overflow-y-auto pt-50 pb-10">
      <div className="w-200 max-w-[95%] bg-secondary/50 rounded-2xl p-6 flex flex-wrap gap-4">
      <div className="w-full h-15">
         <h1 className="text-3xl font-bold flex gap-1 item-center"><AiFillProduct/>Add New Product</h1>

      </div>
        <div className={boxHalf}>
         <label className={labelCls}>Product ID</label>
          <input type="text" value={productId} onChange={(e)=>setProductID(e.target.value)} className={inputCls}/>
          <p className="text-xs text-gray-500 text-right mt-1">Provide a unique product ID</p>
        </div>

        <div className={boxHalf}>
          <label className={labelCls}>Name</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className={inputCls}/>
        </div>

        
        <div className={boxFull}>
          <label className={labelCls}>Alternative Names</label>
          <input type="text" value={altNames} onChange={(e)=>setAltNames(e.target.value)} className={inputCls}/>
          <p className="text-xs text-gray-500 text-right mt-1">Separate multiple names with comma separated</p>
        </div>

        <div className={boxFull}>
          <label className={labelCls}>Description</label>
          <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="w-full min-h-[100px] rounded-xl border-2 px-4 py-2 text-base outline-none focus:border-secondary"/>
        </div>

        <div className={boxHalf}>
          <label className={labelCls}>Price</label>
          <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} className={inputCls}/>
        </div>

        <div className={boxHalf}>
          <label className={labelCls}>Labelled Price</label>
          <input type="number" value={labelledPrice} onChange={(e)=>setlabeledPrice(e.target.value)} className={inputCls}/>
        </div>

        <div className={boxHalf}>
          <label className={labelCls}>Category</label>
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className={inputCls}>
            <option value="CPU">CPU</option>
            <option value="Graphic cards">Graphic cards</option>
            <option value="RAM">RAM</option>
            <option value="PC">PC</option>
            <option value="Laptops">Laptops</option>
            <option value="Monitors">Monitors</option>
            <option value="Mother Boards">Mother Boards</option>
            <option value="Cables">Cables</option>
            <option value="Mouse and Keyboards">Mouse and Keyboards</option>
            <option value="Accessories">Accessories</option>
            <option value="Computer Cases">Computer Cases</option>
            <option value="Cooling Solutions">Cooling Solutions</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className={boxHalf}>
          <label className={labelCls}>Brand</label>
          <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} className={inputCls}/>
        </div>

        <div className={boxHalf}>
          <label className={labelCls}>Model</label>
          <input type="text" value={model} onChange={(e)=>setModel(e.target.value)} className={inputCls}/>
        </div>

        <div className={boxHalf}>
          <label className={labelCls}>Images</label>
          <input type="text" value={images} onChange={(e)=>setImages(e.target.value)} className={inputCls} placeholder="Image URL comma separated"/>
        </div>

        <div className={boxHalf}>
          <label className={labelCls}>Stock</label>
          <input type="number" value={stock} onChange={(e)=>setStock(e.target.value)} className={inputCls}/>
        </div>

        <div className={boxHalf}>
          <label className={labelCls}>Availability</label>
          <select value={isAvailable} onChange={(e)=>setIsAvailable(e.target.value === "true")} className={inputCls}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button className="w-full h-12 text-white bg-secondary rounded-xl hover:text-white hover:bg-secondary/50">Add Product</button>

    </div>
    </div>
  )
}

/*import { useState } from "react";

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
      <div className="h-480 w-200 bg-secondary/50 rounded-2xl p-10">

      <div className=" bg-white p-5">
         <div className="my-3"></div>
         <lable className="text-2xl">Product ID</lable>
         <input type="text" value={productId} onChange={(e)=>{setProductID(e.target.value)}} className="h-13 w-full rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5 border-2"/>
         <p className="text-sm text-grey-500 w-full  text-right" >Provide a unique product ID</p>

      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable className="text-2xl">Name</lable>
         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="text-2xl w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5 border-2"/>

      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable className="text-2xl">Alternative Names</lable>
         <input type="text" value={altNames} onChange={(e)=>{setAltNames(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5 border-2"/>
         <p className="text-sm text-grey-500 w-full  text-right" >Sepetate multiple names with coma seperated</p>
      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable className="text-2xl">Description</lable>
         <textarea type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5 border-2"/>

      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable className="text-2xl">Price</lable>
         <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5 border-2"/>

      </div>
      <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable className="text-2xl">labelledPrice</lable>
         <input type="number" value={labelledPrice} onChange={(e)=>{setlabeledPrice(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5 border-2"/>

      </div>
      

         <div className="w-full bg-white p-5">
         <div className="my-3"></div>
         <lable className="text-2xl">Images</lable>
         <input type="text" value={images} onChange={(e)=>{setImages(e.target.value)}} className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary border-b-secondary shadow-2xl px-5 border-2"/>

      </div>
      
   <div className="w-full bg-white p-5">
   <lable className="text-2xl">Category</lable>

   <select value={category} onChange={(e)=>{setCategory(e.target.value)}}  className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary  border-b-secondary shadow-2xl px-5 border-2 text-2xl">

   <option value="CPU">CPU</option>
   <option value="Graphic cards">Graphic cards</option>
   <option value="RAM">RAM</option>
   <option value="PC">PC</option>
   <option value="Laptops">Laptops</option>
   <option value="Monitors">Monitors</option>
   <option value="Mother Boards">Mother Boards</option>
   <option value="Cables">Cables</option>
   <option value="Mouse and Keyboards">Mouse and Keyboards</option>
   <option value="Accessories">Accessories</option>
   <option value="Computer Cases">Computer Cases</option>
   <option value="Cooling Solutions">Cooling Solutions</option>
   <option value="Others">Others</option>

  </select>

  </div>

<div className="w-full bg-white p-5">
<lable className="text-2xl">Brand</lable>

<input 
type="text" 
value={brand} 
onChange={(e)=>{
   setBrand(e.target.value)
}}
className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary  border-b-secondary shadow-2xl px-5 border-2"
/>
</div>


<div className=" bg-white p-5">
<label className="text-2xl">Model</label>
<input
type="text"
value={model}
onChange={(e)=>{
   setModel(e.target.value);
}}
className="w-full h-13 rounded-2xl focus:ring-1 focus-ring-secondary  border-b-secondary shadow-2xl px-5 border-2"
/>
</div>

<div className=" bg-white p-5">
<label className="text-2xl">Availability</label>
<select value={isAvailable} onChange={(e)=>{ setIsAvailable(e.target.value)}} className="w-1/2 h-13 rounded-2xl focus:ring-1 focus-ring-secondary  border-b-secondary shadow-2xl px-5 border-2 text-2xl">

   <option  value={true}>Yes</option>
   <option  value={true}>No</option>
</select>

</div>

<button className=" my-5 w-full h-13 text-white rounded-2xl focus:ring-1 focus-ring-secondary  border-secondary  px-5  hover:text-white hover:bg-secondary/50">Add Product</button>




   </div>
</div>
    
   )
}*/