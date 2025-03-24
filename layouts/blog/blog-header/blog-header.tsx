import React from "react";
import Element1 from "@/public/assets/blog-home-img/element-1.png";
import Element2 from "@/public/assets/blog-home-img/element-2.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogHeader() {
  return (
    <div className="md:relative flex flex-row justify-between items-center px-12 z-0 overflow-hidden">
      {/* Gradient Effect */}
      <motion.div 
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 0.5, x: "-75%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden md:block absolute top-0 left-0 -translate-x-3/4 -translate-y-1 w-[500px] h-[500px] bg-gradient-to-br from-[#E0FFCC] to-[#CCFFEC] dark:from-[#002900] rounded-full filter blur-3xl opacity-50"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={Element1}
          alt="element-1"
          width={100}
          height={100}
          className="w-0 md:w-16 lg:w-28"
        />
      </motion.div>

      <div className="flex flex-col justify-center items-center gap-4 p-10 sm:pt-0">
        <motion.div 
          className="text-4xl lg:text-5xl text-center overflow-hidden"
        >
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >Blog</motion.span>
          <motion.span 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-2 font-bold ellipsis bg-gradient-to-br from-[#53B086] via-[#85EEB3B5] to-[#53B086] bg-clip-text text-transparent"
          >
            FOSO
          </motion.span>
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >-</motion.span>
        </motion.div>
        
        <motion.div 
          className="text-4xl lg:text-5xl text-center overflow-hidden"
        >
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >Cập Nhật Tin Tức</motion.span>
          <motion.span 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-2 font-bold bg-[linear-gradient(0deg,#85EEB3B5_40%,transparent_40%)] rounded-lg"
          >
            Mới Nhất
          </motion.span>
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm text-center"
        >
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={Element2}
          alt="element-2"
          width={100}
          height={100}
          className="w-0 md:w-16 lg:w-28"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 0.5, x: "75%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden md:block absolute top-0 right-0 translate-x-3/4 translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#E0FFCC] to-[#CCFFEC] dark:from-[#002900] rounded-full filter blur-3xl opacity-50"
      ></motion.div>
    </div>
  );
} 