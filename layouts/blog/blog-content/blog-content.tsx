import Image from "next/image";
import React from "react";
import BlogBanner from "@/public/assets/blog-banner.png";
import BlogCard from "@/components/blog-card/blog-card";
import { Blog } from "@/shared/type";

export default function BlogContent({ blogs } : {blogs: Blog[]}) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold">Tất Cả Bài Viết</div>

      <div className="my-8">
        <Image
          src={BlogBanner}
          alt="Banner"
          width={1200}
          height={400}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Grid blogs 2 cols, Image size 300 300 */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
}
