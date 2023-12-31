"use client"
import React, { useEffect, useState, FormEvent, useRef } from "react"
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, {  ReactDatePickerProps } from 'react-datepicker';
import axios from "axios";
import { getCookie, setCookie } from 'cookies-next';


const completProfile = () => {
  const cookie = getCookie('accessToken');
  // console.log("cookie = ", cookie)
  const [birthDay, setBirthDay] = useState<Date |  null>(null);
  const [gender, setGender] = useState("");
  // const [avatar_URL, setAvatar_URL] = useState<File>();
  const avatar = useRef<File | undefined>(undefined);



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // console.log("avatar_URL = " + avatar_URL);
    const avatar_url = new FormData();
    avatar_url.append("file", avatar.current as File);
    // console.log(avatar_url);

    e.preventDefault();
    await axios.put("http://localhost:3000/auth/modify-data", {
    
      birthDay: birthDay,
      gender: gender,
      cookie: cookie,
      avatar_url: avatar_url,
    }, {headers: {
      "Content-Type": "application/json"
    }}).then(res => {
      setCookie("accessToken", res.data);
    }).catch(err => {});
    // await axios.post("http://localhost:3000/upload", 

    //   // birthDay,
    //   formData,
    //   // gender,
    //   // cookie
    // ).then(res => {}).catch(err => {})
  }


  // const [birthDay, setBirthDay] = useState("");
  const handleDateChange: ReactDatePickerProps['onChange'] = (date) => {
    setBirthDay(date);
    
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      avatar.current = e.target.files[0];
    }
    // setAvatar_URL(e.target.files?.[0]);
    // const formData = new FormData();
    // formData.append("avatar", e.target.files);
    // const file = e.target.files![0];
    // if (!file) return;
    // // if (file.size > 1024 * 1024) return;
    // console.log("formData  " +  file);
    // // if (file.type !== "image/jpeg" && file.type !== "image/png")
    // // return
    // const formData = new FormData();
    // formData.append("avatar", e.target.files![0]);
    // setAvatar_URL(formData);
    // const avataFile = formData;

    // const reader = new FileReader();
    // reader.onload = () => {
    //   setAvatar_URL(reader.result as any)
    // }
    // reader.readAsDataURL(file);
    // setAvatar_URL(formData);
  };
  // console.log(gender);
  return (
    <div className=" grid place-items-center h-screen ">
      <div className=" bg-[#1B071C]/[0.8] min-w-[300px] overflow-auto h-[600px] w-[500px] mt-[140px] rounded-2xl border-[#D16ACE] border">
      <form onSubmit={handleSubmit} className=" text-center grid  place-content-center  font-semibold">
        <div className=" text-white text-center grid place-content-center mt-5 ">
          <div className="font-Bomb">
            <p className=" text-[35px] pt-6">Complete your profile</p>
          </div> 
            <div className="  flex place-content-center mt-4">
              <label htmlFor="uploadImage" className="cursor-pointer flex relative place-content-center">
                <img src="/profileEx.png" alt="profile" width={130} height={130} />
                <img className=" absolute mt-[58px]" src="/camera.svg" alt="icon" width={25} height={20} />
              </label>
              <input onChange={handleImageChange} className="hidden" id="uploadImage" accept="image/*" type="file" name="avatar" /> 
            </div>
            <p className=" font-Heading tracking-wider mt-4">Upload Image</p>
            {/* <div className=" "> */}
              <DatePicker placeholderText="Birth Date" className=" text-gray-400 font-normal bg-[#1C0D16] w-full px-6 border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300  placeholder:text-[#837F7F] p-4  mt-10 sm:mx-0 mx-10 rounded-xl" selected={birthDay} dateFormat="dd/MM/yyyy" onChange={handleDateChange} />
              {/* <p className=" tex absolute">DD / MM / YYYY</p> */}
            {/* </div> */}
            <select onChange={e => setGender(e.target.value)} defaultValue="G" placeholder="Gender" className=" text-[#837F7F] font-normal bg-[#1C0D16] px-6 border-transparent focus:border-transparent focus:ring-0 focus:outline-primary-pink-300 p-4 mt-2 sm:mx-0 mx-10 rounded-xl">
              <option className="" value="G" disabled>Gender</option>
              <option className="" value="Female">Female</option>
              <option className="" value="Male">Male</option>
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
export default completProfile