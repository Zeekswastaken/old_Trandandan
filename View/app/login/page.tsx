"use client"
import axios from "axios";
import { error } from "console";
import { kill } from "process";
import React, { useEffect } from "react"

const login = () => {
  const handleSubmit = () => {
    console.log("Submited");
  }
  const handleGoogle = async () => {
    console.log("here");
    const res = await axios.get("http://localhost:3000/auth/google").then((re)=>{console.log(re)}).catch((err)=>{console.log(err)})

  
  }
  const handle_42 = async () => {
    const res =  await axios.get("http://localhost:3000/auth/42")
    console.log(res.data);
    // alert(res);
    // console.log(res.headers);
  }

  const link_42 = "http://localhost:3000/auth/42";

  const link_google = "http://localhost:3000/auth/google"

  return (
    <div className=" grid place-items-center h-screen ">
      <div className=" bg-[#1B071C]/[0.8] min-w-[300px] overflow-auto h-[600px] w-[500px] rounded-2xl border-[#D16ACE] border">
      <form  className=" text-center grid  place-content-center  font-semibold">
        <div className=" text-white text-center grid place-content-center  ">
          <div className="font-Glitch">
            <p className=" text-[45px] pt-10">Welcome Back</p>
          </div> 
            <div className="space-x-11 flex place-content-center mt-8">
              <a href={link_42} onClick={handle_42} className=" shadow-2xl bg-[#472B4E] hover:bg-[#472B4E]/[0.8] transition-all duration-300 p-2 flex space-x-2 rounded-2xl hover:text-gray-100">
                <img className="" src="/42.svg" alt="42" width={20} height={20} />
                <p>Network</p>
              </a>
              <a href={link_google} onClick={handleGoogle} className=" shadow-2xl bg-[#A1216C] hover:bg-[#A1216C]/[0.8] transition-all duration-300 p-2 flex space-x-2 rounded-2xl hover:text-gray-100">
                <img src="/google.svg" alt="google" width={20} height={20} />
                <p>Google</p>
              </a>
            </div>
            <div className=" pt-10 divider">or</div>
            <input type="text" placeholder="Username" className="bg-[#1C0D16] border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300  placeholder:text-[#837F7F] p-4 mt-10 sm:mx-0 mx-5 rounded-xl"/>
            <input type="password" placeholder="Password" className="bg-[#1C0D16] border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300  placeholder:text-[#837F7F] p-4 mt-4 sm:mx-0 mx-5 rounded-xl "/>
            <a href="#" className=" hover:underline pt-2 text-[#EBA3EA] text-end font-normal text-sm">Forgot  Password?</a>
            <a href="/" className= " text-center text-xl bg-primary-pink-300 hover:bg-primary-pink-300/[0.8] transition duration-300 hover:border font-Bomb mx-20 mt-10 p-2 rounded-2xl">log in
            </a>
            <p className=" font-normal text-xs mt-3">Don’t have an account? <a className=" hover:underline text-[#EBA3EA]" href="/signup">Sing up</a></p>
        </div>
      </form>
      </div>
    </div>
  )
}
export default login