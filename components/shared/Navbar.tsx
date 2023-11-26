import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import HamMenu from "./HamMenu";

function Navbar() {
  return (
    <div className="border-b-light-200 grid-nav flex justify-around border">
      <div className="flex gap-4">
        <HamMenu />
        <Link href={"/"} className="logo h1-bold flex-center">
          <span className="text-secondary-500">Days</span>
          <span className="">Shop</span>
        </Link>
      </div>
      <div
        className={"flex-center gap-8 text-lg max-lg:text-base max-smd:hidden"}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/sign-up"}>Sign-Up</Link>
      </div>
      <div className="flex-between w-auto gap-4 max-smd:hidden">
        <div className="relative flex min-h-[40px] grow items-center gap-1 rounded-xl bg-slate-200 px-4">
          <Input
            type="text"
            placeholder="Search"
            // value={""}
            // onChange={() => {}}
            className="border-0 bg-transparent outline-none ring-0 focus-within:focus-visible:focus:border-none focus-within:focus-visible:focus:outline-none focus-within:focus-visible:focus:ring-0"
          />
          <Image
            src={"/assets/search.svg"}
            width={24}
            height={24}
            alt="search"
            className="cursor-pointer "
          ></Image>
        </div>
      </div>
      <div className="flex gap-3">
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
        <Image
          src={"/assets/person.svg"}
          width={25}
          height={20}
          alt="login"
          className="fill-black"
        ></Image>
      </div>
    </div>
  );
}

export default Navbar;
