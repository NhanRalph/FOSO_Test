import React from "react";
import Element1 from "@/public/assets/blog-home-img/element-1.png"
import Element2 from "@/public/assets/blog-home-img/element-2.png"
import Image from "next/image";

export default function BlogHeader() {
  return (
    <div className="relative flex flex-row justify-between items-center px-20">
  {/* Gradient Effect */}
  <div className="absolute top-0 left-0 -translate-x-3/4 -translate-y-1 w-[500px] h-[500px] bg-gradient-to-br from-[#E0FFCC] to-[#CCFFEC] dark:from-[#002900] rounded-full filter blur-3xl opacity-50"></div>

  <Image src={Element1} alt="element-1" width={100} height={100} />

  <div className="flex flex-col justify-center items-center gap-4 p-10 pt-0">
    <div className="text-5xl">
      <span>Blog</span>
      <span className="mx-2 font-bold ellipsis bg-gradient-to-br from-[#53B086] via-[#85EEB3B5] to-[#53B086] bg-clip-text text-transparent">
        FOSO
      </span>
      <span>-</span>
    </div>
    <div className="text-5xl">
      <span>Cập Nhật Tin Tức</span>
      <span className="mx-2 font-bold relative inline-block">
        <span className="relative z-10">Mới Nhất</span>
        <div className="w-full absolute bottom-0 left-0 h-4 bg-[#85EEB3B5] rounded-lg z-0"></div>
      </span>
    </div>

    <div className="text-sm">
      Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
    </div>
  </div>

  <Image src={Element2} alt="element-2" width={100} height={100} />

  <div className="absolute top-0 right-0 translate-x-3/4 translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#E0FFCC] to-[#CCFFEC] dark:from-[#002900] rounded-full filter blur-3xl opacity-50"></div>
</div>

  );
}
