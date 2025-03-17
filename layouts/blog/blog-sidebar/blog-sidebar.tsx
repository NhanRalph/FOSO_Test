import Image from "next/image";
import React from "react";
import BlogSidebar1 from "@/public/assets/blog-sidebar-1.png";
import BlogSidebar2 from "@/public/assets/blog-sidebar-2.png";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Category {
    label: string;
    quantity: number;
}

const categories: Category[] = [
    { label: "Tất Cả", quantity: 108 },
    { label: "Thiết Kế Website", quantity: 36 },
    { label: "Thiết Kế App Mobile", quantity: 13 },
    { label: "Quản Lý Sản Xuất", quantity: 25 },
    { label: "Quản Lý Bán Hàng", quantity: 22 },
    { label: "Báo Chí Nói Về FOSO", quantity: 7 },
    { label: "Tin Tức FOSO", quantity: 5 },
];

export default function BlogSidebar() {
  return (
    <div className="flex flex-col">
      <div className="text-xl font-bold mb-6">Tìm kiếm</div>
      <div className="relative w-full">
        <Input placeholder="Tìm kiếm bài viết" type="text" className="w-full bg-white border-none p-6"/>
        <Button className="absolute right-0 top-0 h-full px-6 bg-green-600 text-white">
          <Search size={18} />
        </Button>
      </div>

      <div className="text-xl font-bold my-6">Danh mục</div>
      {/* List categories label and quantity */}
        {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-500">
            <div>{category.label}</div>
            <div>{category.quantity}</div>
            </div>
        ))}

      <div className="my-8">
        <Image
          src={BlogSidebar1}
          alt="Banner"
          width={1200}
          height={400}
          className="w-full h-full object-cover rounded-lg"
        />
      </div><div className="my-8">
        <Image
          src={BlogSidebar2}
          alt="Banner"
          width={1200}
          height={400}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
