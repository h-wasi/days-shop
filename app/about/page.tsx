import AdminPic from "@/components/shared/AdminPic";
import Facility from "@/components/shared/Facility";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <main className="mt-20 flex min-h-screen flex-col gap-[8rem]">
      <div className="flex justify-around">
        <div className="flex w-[25rem] flex-col justify-center gap-8 text-left">
          <h1 className="text-4xl font-bold">Our Story</h1>
          <p className="text-lg">
            Launced in 2015, Exclusive is South Asia`s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-lg">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="relative right-[-6.3%] h-[38rem] w-[50vw] bg-gradient-to-r from-purple-500 to-pink-500 bg-cover"></div>
      </div>
      <section className="flex justify-around">
        <div className="flex justify-around gap-20">
          <div className="flex flex-col items-center justify-between gap-2 border border-dark-200 px-[3.1rem] py-[1.8rem]">
            <div className="flex-center before:contents[''] relative h-12 w-12 rounded-full  bg-black/80 before:absolute before:z-[-1] before:h-16 before:w-16 before:rounded-full before:bg-slate-300">
              <Image
                height={25}
                width={28}
                alt="bag"
                src={"/assets/shop.svg"}
                className="invert"
              ></Image>
            </div>
            <h1 className="h1-bold">10.5k</h1>
            <p>Sallers active our site</p>
          </div>
          <div className="relative z-[1] flex flex-col items-center justify-between gap-2 border border-dark-200 bg-secondary-400 px-[3.1rem] py-[1.8rem] text-light-800">
            <div className="flex-center before:contents[''] relative  h-12 w-12 rounded-full  bg-light-850 before:absolute before:z-[-1] before:h-16 before:w-16 before:rounded-full before:bg-secondary-300">
              <Image
                height={30}
                width={30}
                alt="bag"
                src={"/assets/coin.svg"}
                className=""
              ></Image>
            </div>
            <h1 className="h1-bold">33k</h1>
            <p>Monthly Product Sale</p>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 border border-dark-200 px-[3.1rem] py-[1.8rem]">
            <div className="flex-center before:contents[''] relative h-12 w-12 rounded-full  bg-black/80 before:absolute before:z-[-1] before:h-16 before:w-16 before:rounded-full before:bg-slate-300">
              <Image
                height={30}
                width={30}
                alt="bag"
                src={"/assets/bag.svg"}
              ></Image>
            </div>
            <h1 className="h1-bold">45.5k</h1>
            <p>Customer active in our site</p>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 border border-dark-200 px-[3.1rem] py-[1.8rem]">
            <div className="flex-center before:contents[''] relative h-12 w-12 rounded-full  bg-black/80 before:absolute before:z-[-1] before:h-16 before:w-16 before:rounded-full before:bg-slate-300">
              <Image
                height={30}
                width={30}
                alt="bag"
                src={"/assets/money-bag.svg"}
                className="invert"
              ></Image>
            </div>
            <h1 className="h1-bold">25k</h1>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex gap-8">
          <AdminPic
            name={"Tom Cruise"}
            occupation={"Founder & Chairman"}
            img={"bg-frame1"}
          />
          <AdminPic
            name={"Tom Cruise"}
            occupation={"Founder & Chairman"}
            img={"bg-frame3"}
          />
          <AdminPic
            name={"Tom Cruise"}
            occupation={"Founder & Chairman"}
            img={"bg-frame2"}
          />
        </div>
      </section>
      <Facility />
    </main>
  );
}

export default page;
