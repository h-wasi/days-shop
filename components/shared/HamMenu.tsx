"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export default function HamMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="hidden max-smd:flex">
        <Image
          src={"/assets/menu.svg"}
          width={30}
          height={25}
          alt="ham"
        ></Image>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-slate-400/80">
        <SheetClose asChild>
          <Link href={"/"} className="logo h1-bold flex-center my-[2rem]">
            <span className="text-secondary-500">Days</span>
            <span className="">Shop</span>
          </Link>
        </SheetClose>

        <div
          className={
            "h2-bold flex flex-col items-center justify-center gap-8 text-lg"
          }
        >
          <SheetClose asChild>
            <Link href={"/"}>Home</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"/contact"}>Contact</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"/about"}>About</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"/sign-up"}>Sign-Up</Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
