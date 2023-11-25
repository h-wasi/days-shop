import Image from "next/image";
import React from "react";

interface Prop {
  name: string;
  occupation: string;
  img: string;
}

function AdminPic({ name, occupation, img }: Prop) {
  return (
    <div className="flex flex-col gap-4">
      <div className={`h-[25rem] w-[20rem] bg-cover ${img}`}></div>
      <div className="flex flex-col gap-1.5 bg-white">
        <h1 className="text-2xl font-semibold tracking-wider">{name}</h1>
        <p>{occupation}</p>
        <div className="flex gap-4">
          <Image
            src={"/assets/linkedin.svg"}
            width={25}
            height={25}
            alt="linkedin"
          ></Image>
          <Image
            src={"/assets/insta.svg"}
            width={25}
            height={20}
            alt="linkedin"
          ></Image>
          <Image
            src={"/assets/twitter.svg"}
            width={25}
            height={20}
            alt="linkedin"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default AdminPic;
