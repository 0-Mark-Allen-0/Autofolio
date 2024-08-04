"use client";

import React from "react";
import Link from "next/link";
import LoginButton from "../../items/login-button";
import Image from "next/image";
import logo from "../../items/updated-white-logo-cropped.png";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-10 bg-neutral-800">
      <div className="p-5 h-20 drop-shadow-xl shadow-xl overflow-visible">
        <div className="flex justify-between flex-col sm:flex-row">
          <header className="text-[20px] text-white/80 font-bold no-underline hover:text-white">
            <Image src={logo} width={200} height={50} alt="logo" />
          </header>

          <div>
            <ul>
              <li className="inline-block pl-2 pr-2">
                <Link
                  href="/"
                  className="pl-2 pr-2 text-white/80 font-medium no-underline hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li className="inline-block pl-2 pr-2">
                <Link
                  href="/blog"
                  className="pl-2 pr-2 text-white/80 font-medium no-underline hover:text-white"
                >
                  Blog
                </Link>
              </li>

              <li className="inline-block pl-2 pr-2">
                <Link
                  href="/"
                  className="pl-2 pr-2 text-white/80 font-medium no-underline hover:text-white"
                >
                  Pricing
                </Link>
              </li>

              <li className="inline-block pl-2 pr-2">
                {session && session.user ? (
                  <Link href="/profile">
                    <p
                      className="pl-2 pr-2 
                                            bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 font-semibold"
                    >
                      User Profile
                    </p>
                  </Link>
                ) : (
                  <LoginButton />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
