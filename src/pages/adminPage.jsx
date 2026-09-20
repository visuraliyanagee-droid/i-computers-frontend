import { Route, Routes } from "react-router-dom";

export default function Admin() {

    return(

        <div className="w-full h-full bg-primary flex">
            <div className="w-90 bg-primary h-full">
            <div className= "w-55 h-40 flex text-white items-center">
                <img src="/logo.png" className="h-full"/>
            <h1 className="text-2xl">Admin </h1>
            </div>
            <div className="w=full h-100 text-2xl text-white flex flex-col">
                <a href="/admin">Orders</a>
                <a href="/admin/products">Products</a>
                <a href="/admin/users">Users</a>
                <a href="/admin/reviews">Reviews</a>


            </div>
            </div>
            
            
            <div className="w-full  max-h-full bg-[#0e46b5] overflow-y-scroll border-5 border-primary rounded-4xl scrollbar-thumb-[#334155] scrollbar-track-transparent">
             <Routes path="/Admin">
           <Route path="/Admin" element={<h1>Orders</h1>}/>
           <Route path="/Products" element={<h1>Products</h1>}/>
           <Route path="/users" element={<h1>Users</h1>}/>
           <Route path="/Reviews" element={<h1>Reviews</h1>}/>



           </Routes>

           

            </div>




        </div>

    )
}