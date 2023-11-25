import Image from "next/image";
import React from "react";

interface Prop {
  img: string;
  title: string;
  content: string;
}

function Feature({ title, content, img }: Prop) {
  return (
    <div className="flex flex-col items-center justify-between gap-2 px-[3.1rem] py-[1.8rem] mb-20">
      <div className="flex-center before:contents[''] relative mb-6 h-12 w-12 rounded-full  bg-black/80 before:absolute before:z-[-1] before:h-16 before:w-16 before:rounded-full before:bg-slate-400">
        <Image
          height={25}
          width={40}
          alt={title}
          src={img}
          className="invert"
        ></Image>
      </div>
      <h1 className="h3-bold">{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Feature;
