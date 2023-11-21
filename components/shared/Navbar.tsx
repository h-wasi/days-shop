import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

function Navbar() {
  return (
    <div className="border-b-light-200 flex justify-around border py-4">
      <Link href={"/"} className="logo h1-bold max-md:px-4">
        <span className="text-secondary-500">Days</span>
        <span className="">Shop</span>
      </Link>
      <div
        className={
          "flex justify-between gap-8 pt-2 text-lg max-lg:gap-4 max-lg:text-base"
        }
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/sign-up"}>Sign-Up</Link>
      </div>
      <div className="flex content-between gap-4">
        <div className="relative flex min-h-[40px] grow items-center gap-1 rounded-xl bg-slate-200 px-4">
          <Input
            type="text"
            placeholder="Search"
            // value={""}
            // onChange={() => {}}
            className="border-0 bg-red-500 outline-none ring-0"
          />
          <Image
            src={"/assets/search.svg"}
            width={24}
            height={24}
            alt="search"
            className="cursor-pointer "
          ></Image>
        </div>
        <Image
          src={"/assets/heart.svg"}
          width={20}
          height={20}
          alt="wishlist"
        ></Image>
        <Image
          src={"/assets/cart.svg"}
          width={20}
          height={20}
          alt="cart"
        ></Image>
      </div>
    </div>
  );
}

export default Navbar;
