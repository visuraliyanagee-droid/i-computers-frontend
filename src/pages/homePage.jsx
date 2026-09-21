import { Route, Routes } from "react-router-dom";
import Header from "../components/header.jsx";

export default function HomePage(){
    return(
        <div className="w-full h-full">
            <Header/>
        
            <Routes>
                    <Route path="/" element={<h1>home page</h1>}/>
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path= "/about" element={<h1>About</h1>}/>
                    <Route path="/contact" element={<h1>Contact</h1>}/>
                    <Route path="/*" element={<h1>Page not found</h1>}/>

                 </Routes>
               
            
    </div>    
    )
}