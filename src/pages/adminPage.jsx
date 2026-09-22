import { Link, Route, Routes } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { MdReviews } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";



export default function Admin() {

    return(

        <div className="w-full h-full bg-primary flex">

            
            <div className="w-90  h-full bg-primary">
            <div className= "w-90 h-40 flex text-white items-center bg-primary">
                <img src="/logo.png" className="h-full"/>
            <h1 className="text-2xl">Admin </h1>
            </div>
            <div className="w=full h-100 text-2xl text-white flex flex-col bg-primary">

                <Link to ="/admin" className="w-full flex items-center h-12 gap-5"><LuClipboardList />orders</Link>
                <Link to ="/Admin/products" className="w-full flex items-center h-12 gap-5"><AiOutlineProduct />Products</Link>
                <Link to ="/Admin/users" className="w-full flex items-center h-12 gap-5"><FaUsers />Users</Link>
                <Link to ="/Admin/reviews" className="w-full flex items-center h-12 gap-5"><MdReviews />Reviews</Link>
                


            </div>
            </div>
            
            
            <div className="w-full  max-h-full bg-[#e9ecf1] overflow-y-scroll border-5 border-primary rounded-4xl scrollbar-thumb-[#334155] scrollbar-track-transparent">
            
 <Routes path="/Admin">
           <Route path ="/Admin" element={<h1>Orders</h1>}/>
           <Route path ="/Products" element={<h1>Products</h1>}/>
           <Route path ="/users" element={<h1>Users</h1>}/>
           <Route path ="/Reviews" element={<h1>Reviews</h1>}/>
      



           </Routes>
           

            </div>




        </div>

    )
}