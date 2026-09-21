import { Link } from "react-router-dom";

export default function Header(){
    return(
        
        <header className="w-full h-30 bg-secondary flex flex-row" >
            <img src="/logo.png"  alt="logo" className=" h-full"/>

            <div className="w-full h-full flex text-primary justify-center items-center gap-10 text-xl ">
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact us</Link>
                
            </div>
           
       

        </header>

        

    )
}