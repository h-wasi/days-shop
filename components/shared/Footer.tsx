import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="grid-footer bg-dark-300 py-20 font-poppins text-slate-50">
        <section className="flex justify-around">
          <div className="flex flex-col justify-between gap-6">
            <Link href={"/"} className="logo h2-bold font-inter">
              <span className="text-secondary-500">Days</span>
              <span className="">Shop</span>
            </Link>
            <h2 className="h3-bold">Subscribe</h2>
            <p>Get off 10&#37; your first order</p>
            <div className="bg-transparen flex w-[13.5rem] rounded-md border border-light-500 px-4">
              <Input
                className="border-0 bg-transparent outline-none ring-0 focus-within:focus-visible:focus:border-none focus-within:focus-visible:focus:outline-none focus-within:focus-visible:focus:ring-0"
                placeholder="Enter Your E-mail"
              ></Input>
              <Image
                src={"/assets/paper-plane.svg"}
                width={20}
                height={20}
                alt="email"
                className="cursor-pointer"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="h3-semibold">Support</h1>
            <p>
              111 Bijay sarami,Las Angeles,
              <br /> LA 1515,U.S.A
            </p>
            <p>daysshop@example.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="h3-semibold">Account</h1>
            <p>My Account</p>
            <p>Login &#x2F; Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>shop</p>
          </div>
          <div>
            <h1 className="h3-semibold">Quick Link</h1>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="flex w-[15rem] flex-col gap-1.5">
            <h1 className="h3-semibold">Download APP</h1>
            <p>Save &euro;3 with App</p>
            <div className="grid-apps grid h-[6rem]">
              <Image
                src={"/assets/qr-code-svgrepo-com.svg"}
                width={90}
                height={60}
                alt="qr"
                className="qr self-center invert"
              ></Image>
              <Image
                src={"/assets/app-store.svg"}
                width={90}
                height={20}
                alt="apple"
                className="apple"
              ></Image>
              <Image
                src={"/assets/google-play.svg"}
                width={90}
                height={20}
                alt="google"
                className="google"
              ></Image>
            </div>
            <div className="flex w-[8rem] justify-between">
              <Link href={"/"}>
                <Image
                  src={"/assets/facebook-svgrepo-com.svg"}
                  width={20}
                  height={20}
                  alt="fb"
                  className="invert"
                ></Image>
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/assets/icons8-twitter.svg"}
                  width={24}
                  height={24}
                  alt="twitter"
                  className="invert"
                ></Image>
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/assets/linkedin-svgrepo-com.svg"}
                  width={25}
                  height={25}
                  alt="linkedin"
                  className="invert"
                ></Image>
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/assets/insta-svgrepo-com.svg"}
                  width={25}
                  height={25}
                  alt="insta"
                  className="invert"
                ></Image>
              </Link>
            </div>
          </div>
        </section>
        <p className="mt-16 flex justify-center">
          Made with
          <Image
            src={"/assets/love.svg"}
            width={25}
            height={25}
            alt="love"
            className="mx-2"
          ></Image>
          by
          <div className="ml-2 flex gap-4 text-emerald-300">
            <Link href={"https://github.com/h-wasi"}>1: Wasi</Link>
            <Link href={"https://github.com/Mohsin-mw"}>2: Mohsin</Link>
            <Link href={"https://github.com/Ishtiaq-Ahmed101"}>3: Ishtiaq</Link>
          </div>
        </p>
      </div>
    </>
  );
}

export default Footer;
