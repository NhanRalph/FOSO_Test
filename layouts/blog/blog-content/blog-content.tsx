import Image, { StaticImageData } from "next/image";
import React from "react";
import BlogImage from "@/public/assets/blog-img.png";
import BlogBanner from "@/public/assets/blog-banner.png";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Blog {
  title: string;
  image: StaticImageData;
  createdAt: string;
  readTime: number;
  type: string;
}

const blogs: Blog[] = [
  {
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-10",
    readTime: 5,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-10",
    readTime: 5,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-11",
    readTime: 10,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-12",
    readTime: 15,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-13",
    readTime: 20,
    type: "Quản lý sản xuất",
  },
  {
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    image: BlogImage,
    createdAt: "2021-10-14",
    readTime: 25,
    type: "Quản lý sản xuất",
  },
];

export default function BlogContent() {
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
          <div key={index} className="flex flex-col gap-4">
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
            <div>
              <Badge variant="info">{blog.type}</Badge>
            </div>
            <div className="text-lg font-bold">{blog.title}</div>
            <div className="flex flex-row gap-4 text-gray-500">
              <div className="text-sm flex flex-row gap-2">
                <Calendar size={16} />
                {blog.createdAt}
              </div>
              <div className="text-sm flex flex-row gap-2">
                {blog.readTime} phút đọc
              </div>
            </div>
            <div>
              <Button variant="ghost" className="flex">
                Khám phá thêm
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
