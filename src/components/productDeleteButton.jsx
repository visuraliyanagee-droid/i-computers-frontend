import { useState } from "react";
import toast from "react-hot-toast";

export default function ProductDeleteButton(props){


    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const productID = props.productID;

    async function handleDelete(){

            setIsMessageOpen(true);
            toast.success("Product deleted successfully"+ productID);
            
    }

    return(
        <>
           <button onClick={handleDelete} className="w-25 bg-red-500 flex justify-center item-center text-white rounded-2xl p-2 cursor-pointer hover:bg-red-700 ">Delete</button>
        {isMessageOpen && (
            <div className="w-100 fixed top-0 left-0"> Are you Sure you want to delete this product?</div>
        )}
        </>                          
    )
}

/*
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
                                                            setLoaded(false);
                                                        }
                                                    )
                                                }
                                             } className="w-25 bg-red-500 flex justify-center item-center text-white rounded-2xl p-2 cursor-pointer hover:bg-red-700 ">Delete</button>
                                            </td>
                                        </tr>*/