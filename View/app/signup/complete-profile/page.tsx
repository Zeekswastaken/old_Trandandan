"use client"
import React, { useEffect, useState } from "react"
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, {  ReactDatePickerProps } from 'react-datepicker';

// import Datepicker from 'flowbite-datepicker/Datepicker';


const signup = () => {
  const handleSubmit = () => {
    console.log("Submited");
  }
  // const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleDateChange: ReactDatePickerProps['onChange'] = (date) => {
    setStartDate(date);
  };
  return (
    <div className=" grid place-items-center h-screen ">
      <div className=" bg-[#1B071C]/[0.8] min-w-[300px] overflow-auto h-[600px] w-[500px] mt-[140px] rounded-2xl border-[#D16ACE] border">
      <form action="/" className=" text-center grid  place-content-center  font-semibold">
        <div className=" text-white text-center grid place-content-center mt-5 ">
          <div className="font-Bomb">
            <p className=" text-[35px] pt-6">Complete your profile</p>
          </div> 
            <div className="  flex place-content-center mt-4">
              <label htmlFor="uploadImage" className="cursor-pointer flex relative place-content-center">
                <img src="/profileEx.png" alt="profile" width={130} height={130} />
                <img className=" absolute mt-[58px]" src="/camera.svg" alt="icon" width={25} height={20} />
              </label>
              <input className="hidden" id="uploadImage" type="file" /> 
            </div>
            <p className=" font-Heading tracking-wider mt-4">Upload Image</p>
            {/* <div className=" "> */}
              <DatePicker placeholderText="Birth Date" className=" text-gray-400 font-normal bg-[#1C0D16] w-full px-6 border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300  placeholder:text-[#837F7F] p-4  mt-10 sm:mx-0 mx-10 rounded-xl" selected={startDate} onChange={handleDateChange} />
              {/* <p className=" tex absolute">DD / MM / YYYY</p> */}
            {/* </div> */}
            <select placeholder="Gender" className=" text-[#837F7F] font-normal bg-[#1C0D16] px-6 border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300 p-4 mt-2 sm:mx-0 mx-10 rounded-xl">
              <option className="" disabled selected>Gender</option>
              <option className="" value="F">Female</option>
              <option className="" value="M">Male</option>
            </select>
            <button className= " text-center text-xl bg-primary-pink-300 hover:bg-primary-pink-300/[0.8] transition duration-300 hover:border font-Bomb mx-20 mt-14 p-2 rounded-2xl">
              confirm
            </button>
        </div>
      </form>
      </div>
    </div>
)
}
export default signup