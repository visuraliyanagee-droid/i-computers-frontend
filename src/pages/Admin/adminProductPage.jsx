import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function AdminProductPage(){
    return(
        <div className="w-full h-full flex justify-center items-center text-6xl relative">
            products page

<Link to="/admin/products/add-product" className="w-15 h-15 flex justify-center items-center border-2 rounded-full absolute right-3 bottom-5 hover:text-white hover:bg-primary"><BiPlus/></Link>
        </div>
    )
}