"use client";

//File Imports
import React from "react";
import Navbar from "../components/pages/HomePage/navbar";
import Footer from "../components/pages/Footer/footer";
import logo from "../components/items/updated-white-logo-cropped.png";

//Plugin Imports
import { getServerSession } from "next-auth/next";
// import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <Navbar />
        <div className="text-[50px] pb-[500px]">
          <Link href="/add-details">
            <button className="p-4 rounded-[20px] bg-orange-500 text-[25px] text-white">
              Add Vehicle
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen text-[30px] bg-zinc-800">
        <div className="flex flex-col items-center">
          <div className="flex items-center text-white font-medium gap-10 bg-black w-fit h-fit p-14 rounded-[20px]">
            <Image src={logo} width={200} height={50} alt="logo" />
            <div className="w-px h-12 bg-white mx-6"></div>
            <span>
              Please
              <Link href="/login">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 font-semibold pr-3 pl-3">
                  Login
                </span>
              </Link>
              To Access This Page
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
