"use client";

import { useUserDataContext } from "@/app/userDataProvider";
import React, { MouseEvent, useEffect, useState } from "react";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getCookie } from "cookies-next";
import Link from "next/link";

type Props = {
  styles: string;
}

const FriendCard = ( {styles}:Props ) => {

  const [isFriend, setIsFriend] = useState(true);

  const unFriend = (e: MouseEvent) => {
    setIsFriend(false);
  }

  return (
    <>
      {isFriend && (
        <div className={` ${styles} bg-[#3A0E3B] drop-shadow-[6px_5px_0_rgba(0,0,00.15)] rounded-2xl px-2 2xl:px-6 py-3 `}>
          <div className=" flex justify-between space-x-2 items-center">
            <div className=" flex space-x-5">
              <img
                src="/Spectate.png"
                height={50}
                width={50}
                alt="avatar"
                className=" rounded-2xl"
              />
              <div>
                <Link href={"/user/Dwight"} className=" font-Heading text-[#EEEEEE] text-xl">Dwight</Link>
                <p className=" text-[#B4B4B4] text-xs">3 mutual friends</p>
              </div>
            </div>
            <div className=" dropdown dropdown-end  cursor-pointer ">
                <svg
                tabIndex={0}
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="4"
                  viewBox="0 0 13 4"
                  fill="none"
                  className=" w-5 h-5"
                >
                  <path
                    d="M0.521915 2C0.513031 1.48762 0.641936 0.990672 0.880796 0.61647C1.11966 0.242269 1.4493 0.0208404 1.79855 0C1.97196 0.00826693 2.14256 0.0665729 2.3006 0.171584C2.45863 0.276594 2.601 0.426251 2.71956 0.611997C2.83813 0.797742 2.93056 1.01593 2.99159 1.2541C3.05261 1.49226 3.08101 1.74573 3.07519 2C3.08101 2.25427 3.05261 2.50774 2.99159 2.7459C2.93056 2.98407 2.83813 3.20226 2.71956 3.388C2.601 3.57375 2.45863 3.72341 2.3006 3.82842C2.14256 3.93343 1.97196 3.99173 1.79855 4C1.4493 3.97916 1.11966 3.75773 0.880796 3.38353C0.641936 3.00933 0.513031 2.51238 0.521915 2ZM9.9712 2C9.9882 1.63625 10.0773 1.28769 10.2275 0.997133C10.3777 0.706574 10.5825 0.48666 10.8167 0.364395C11.051 0.24213 11.3045 0.222836 11.5461 0.308881C11.7878 0.394926 12.007 0.582566 12.1769 0.848759C12.3468 1.11495 12.46 1.44811 12.5026 1.80733C12.5452 2.16655 12.5153 2.53618 12.4167 2.87086C12.318 3.20553 12.1548 3.49066 11.9472 3.69125C11.7396 3.89184 11.4965 3.99915 11.2478 4C11.0744 3.99173 10.9038 3.93343 10.7458 3.82842C10.5878 3.72341 10.4454 3.57375 10.3268 3.388C10.2083 3.20226 10.1158 2.98407 10.0548 2.7459C9.99378 2.50774 9.96537 2.25427 9.9712 2ZM5.24656 2C5.24656 1.50351 5.38106 1.02736 5.62048 0.676296C5.85989 0.325227 6.18461 0.128 6.52319 0.128C6.86178 0.128 7.1865 0.325227 7.42591 0.676296C7.66533 1.02736 7.79983 1.50351 7.79983 2C7.79983 2.49649 7.66533 2.97264 7.42591 3.3237C7.1865 3.67477 6.86178 3.872 6.52319 3.872C6.18461 3.872 5.85989 3.67477 5.62048 3.3237C5.38106 2.97264 5.24656 2.49649 5.24656 2Z"
                    fill="white"
                  />
                </svg>
              <ul tabIndex={0} className=" text-white dropdown-content top-0 p-2 shadow bg-[#472B4E] rounded-xl w-24">
                  <li onClick={e => setIsFriend(false)} className=" font-Heading tracking-wide text-center hover:bg-[#321B38] hover:rounded-xl"><a>Unfriend</a></li>
                  <li onClick={e => setIsFriend(false)} className=" font-Heading tracking-wide text-center hover:bg-[#321B38] hover:rounded-xl"><a>Block</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const BlockedCard = () => {

  const [isBlocked, setIsBlocked] = useState(true);
  const unBlocked = (e: MouseEvent) => {
    setIsBlocked(false)
  }

  return (
    <>
      {isBlocked && (
        <div className=" bg-[#3A0E3B] drop-shadow-[6px_5px_0_rgba(0,0,00.15)] rounded-2xl px-2 2xl:px-6 py-3">
          <div className=" flex justify-between items-center">
            <div className=" flex space-x-5 items-center">
              <img
                src="/Spectate.png"
                height={50}
                width={50}
                alt="avatar"
                className=" rounded-2xl"
              />
              <div>
                <p className=" font-Heading text-[#EEEEEE] text-xl">Dwight</p>
              </div>
            </div>
            <button onClick={unBlocked} className=" font-Heading text-[#EEEEEE] tracking-wide text-xs hover:bg-[#321B38] duration-300 rounded-2xl p-2 bg-[#472B4E]">Unblock</button>
          </div>
        </div>
      )}
    </>
  );
};

const Friends = () => {
  const [friends, setFriends] = useState(true);
  const [blocked, setBlocked] = useState(false);
  let friendButtonStyle = " py-1 px-5 rounded-3xl bg-primary-pink-300";
  let blockedButtonStyle =
    " py-1 px-5 rounded-3xl bg-[#DA1275]/[0.2] hover:bg-primary-pink-300/[0.4] duration-300";

  if (!friends) {
    friendButtonStyle =
      " py-1 px-5 rounded-3xl bg-[#DA1275]/[0.2] hover:bg-primary-pink-300/[0.4] duration-300";
    blockedButtonStyle = " py-1 px-5 rounded-3xl bg-primary-pink-300";
  }

  const handleFriendClickedTab = () => {
    setFriends(true);
    setBlocked(false);
  };
  const handleBlockedClickedTab = () => {
    setBlocked(true);
    setFriends(false);
  };

  const userData = useUserDataContext();
  const [currentUsername, setCurrentUsername] = useState<string>("");

  useEffect(() => {
    const token = getCookie("accessToken");
    try {
      const user = jwt.decode(token as string) as JwtPayload
      if (user)
        setCurrentUsername(user.username)
      // setCurrentUsername(jwt.decode(token).username);
    } catch (error) {
      console.error('Error decoding token:');
    }
  }, [])

  
  return (
    <div className=" border-2 mt-10 border-primary-pink-300 rounded-[20px]">
      <div className=" glass w-full h-auto  ">
        <div className=" px-10 2xl:px-28 pt-20 pb-12">
          <h1 className="  text-white font-Bomb text-4xl break-all">
            friend list
          </h1>
          <div className="  py-8 bg-[#2F0331] rounded-3xl">
            <div className=" animate-fade-left pt-1 pl-2 2xl:pl-10">
              <div className=" flex space-x-3 text-white font-Heading text-2xl tracking-wide">
                <div className={friendButtonStyle}>
                  <button onClick={handleFriendClickedTab}>Friends</button>
                </div>
                {userData?.username === currentUsername && (
                  <div className={blockedButtonStyle}>
                    <button onClick={handleBlockedClickedTab}>Blocked</button>
                  </div>
                )}
              </div>
            </div>
            {friends && !blocked ? (
              <div className=" animate-fade-left overflow-y-auto pb-10 no-scrollbar max-h-[450px] rounded-xl mx-2  2xl:mx-10 mt-8 grid  grid-cols-1 xl:grid-cols-2 gap-4 ">
                <FriendCard styles=""/>
                <FriendCard styles=""/>
                <FriendCard styles=""/>

              </div>
            ) : (
              <div className=" animate-fade-right overflow-y-auto no-scrollbar max-h-[450px] rounded-xl mx-2 2xl:mx-10 mt-8 grid  grid-cols-1 xl:grid-cols-2 gap-4 ">
                <BlockedCard />
                <BlockedCard />
                <BlockedCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
