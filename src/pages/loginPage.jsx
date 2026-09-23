import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {

    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

   async function login(){
        console.log("log in button clicked")
        console.log("email:",email);
        console.log("password:",password);

       
    try{ 
        const res =await axios.post("http://localhost:5000/login",{
            email:email,
            password:password
        });
  console.log(res)

    
   } catch(err){
    console.log("Error during login:");
    console.log(err);
   }
   }

    return(
        <div className="w-full h-screen   bg-[url('/background.jpg')] bg-center bg-cover bg-no-repeat flex">

            <div className="w-[50%] h-full flex justify-center items-center flex-col p-15 ">
                <img src="/logo.png" alt="logo" className="w-70 h-50 object-cover"/>
                <h1 className="text-4xl text-logopink text-shadow-2xl font-bold">Plug In.Power Up.Play Hard.</h1>
                <p className="5 text-secondary font-semibold italic">Get your Ultimate Experience</p>

            </div>

             <div className="w-[50%] h-full flex justify-center items-center">

                <div className="w-115 h-150 backdrop-blur-3xl shadow-2xl rounded-3xl flex flex-col items-center">
                    <h1 className="text-4xl font-bold mt-8 text-primary flex justify-center item-center">Login</h1><br/>
                    
                <input onChange={
                    (e)=>{
                      setEmail(e.target.value)
                        
                    }
                } 
                type="email" placeholder="Your Email" className="w-90 h-15 mb-5 rounded-lg border border-secondary p-5 text-20px focus:ring-2 focus:ring-amber-400"/>
                <input onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                } type="password" placeholder="Enter your password" className="w-90 h-15 mb-5 rounded-lg border border-secondary p-5 text-20px focus:ring-2 focus:ring-amber-400"/>
                <button onClick={login} className="w-100 h-15 bg-primary  font-bold text-white text-3xl rounded-xl border-2 border-accent hover:bg-transparent hover:text-secondary">Log in</button>
                <p>Forget your password?  <Link to="/forgot-password"className="text-primary">Reset it here</Link></p>

                <p className="text-right">Don't have an account?  <Link to="/registerPage"className="text-white">Login here</Link></p>


                </div>
                
            </div> 

        </div>
        
    )

    
}