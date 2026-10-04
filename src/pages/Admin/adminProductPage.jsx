import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function AdminProductPage(){

    const [products,setProducts]=useState([])
    //console.log("URL:", import.meta.env.VITE_BACKEND_URL);
    let loading = true
    let error = "no error"

   useEffect(()=>{
    const token = localStorage.getItem("token");
    //console.log("Token:", token);

    axios.get(import.meta.env.VITE_BACKEND_URL + "/products", {
        headers: {
            Authorization: "Bearer " + token
        }
    }).then((response)=>{
        setProducts(response.data);
    })
   .catch((err)=>{
        console.error(err)
    })
},[loading , error])

    return(
        <div className="w-full min-h-full bg-primary/[0.03] p-6 lg:p-10">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-8 h-1 rounded-full bg-gradient-to-r from-accent to-logopink"></span>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/70">Inventory</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary">Products</h1>
                    <p className="text-sm text-secondary/70 mt-2">{products.length} total products in your store</p>
                </div>
                <Link to="/admin/products/add-product" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-medium shadow-lg shadow-primary/20 hover:bg-accent hover:shadow-accent/25 hover:-translate-y-0.5 transition-all">
                    <BiPlus className="text-lg"/> Add Product
                </Link>
            </div>

            {/* Card */}
            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-primary/5 overflow-hidden">

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="bg-primary text-white/90 text-[11px] uppercase tracking-[0.15em]">
                                <th className="px-6 py-5 font-semibold rounded-tl-3xl">Product</th>
                                <th className="px-6 py-5 font-semibold">Product ID</th>
                                <th className="px-6 py-5 font-semibold">Price</th>
                                <th className="px-6 py-5 font-semibold">Labelled</th>
                                <th className="px-6 py-5 font-semibold">Category</th>
                                <th className="px-6 py-5 font-semibold">Brand / Model</th>
                                <th className="px-6 py-5 font-semibold">Stock</th>
                                <th className="px-6 py-5 font-semibold">Status</th>
                                <th className="px-6 py-5 font-semibold text-right rounded-tr-3xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5">
                        {
                            products.map(
                                (item)=>{
                                    return (
                                        <tr key={item.productID} className="group hover:bg-accent/[0.04] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative">
                                                        <img src={item.images[0]} className="w-12 h-12 rounded-2xl object-cover ring-1 ring-primary/10 bg-primary/5"/>
                                                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                                                            <span className={`w-2.5 h-2.5 rounded-full ${item.isAvailable? 'bg-emerald-500' : 'bg-logopink'}`}></span>
                                                        </span>
                                                    </div>
                                                    <span className="font-semibold text-primary max-w-[200px] truncate group-hover:text-accent transition-colors">{item.name}</span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4">
                                                <span className="font-mono text-xs text-secondary bg-primary/5 px-2.5 py-1.5 rounded-lg border border-primary/5">{item.productID}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-bold text-primary">Rs. {item.price}</span>
                                            </td>
                                            <td className="px-6 py-4 text-secondary/40 line-through text-[13px]">{item.labelledPrice}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent ring-1 ring-accent/20">{item.category}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="leading-tight">
                                                    <div className="font-medium text-primary">{item.brand}</div>
                                                    <div className="text-xs text-secondary/60 mt-0.5">{item.model}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center justify-center min-w-[44px] px-2.5 py-1 rounded-lg text-sm font-bold ${item.stock > 10? 'bg-primary/5 text-primary' : 'bg-logopink/10 text-logopink'}`}>
                                                    {item.stock}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.isAvailable?
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent ring-1 ring-accent/20">
                                                        Available
                                                    </span>
                                                :
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-logopink/10 text-logopink ring-1 ring-logopink/20">
                                                        Hidden
                                                    </span>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button onClick={
                                                    ()=>{
                                                        const token = localStorage.getItem("token");
                                                    
                                                    axios.delete(import.meta.env.VITE_BACKEND_URL + "/products/" + item.productID,{
                                                        headers: {
                                                            Authorization: "Bearer " + token
                                                        }
                                                    }).then(
                                                        ()=>{
                                                            toast.success("product deleted successfully")
                                                        }
                                                    )
                                                }
                                             } className="w-25 bg-red-500 flex justify-center item-center text-white rounded-2xl p-2 cursor-pointer hover:bg-red-700 ">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Floating Action */}
            <Link to="/admin/products/add-product" className="fixed bottom-8 right-8 w-16 h-16 flex justify-center items-center rounded-2xl bg-gradient-to-br from-accent to-logopink text-white shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-logopink/30 hover:scale-105 active:scale-95 transition-all text-3xl">
                <BiPlus/>
            </Link>
        </div>
    )
}