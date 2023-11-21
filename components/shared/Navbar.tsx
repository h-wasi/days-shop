import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
// import { Input } from "../ui/input";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex-between">
      <div className="logo h1-bold">DaysShop</div>
      <div className={"flex-between"}>
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/sign-up"}>Sign-Up</Link>
      </div>
      <div>
        search
        <Button asChild>
          <Image
            src={"/heart-svgrepo-com.svg"}
            width={16}
            height={16}
            alt={"wishlist"}
          ></Image>
        </Button>
        <Button asChild>
          <Image
            src={"/heart-svgrepo-com.svg"}
            width={16}
            height={16}
            alt={"cart"}
          ></Image>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
