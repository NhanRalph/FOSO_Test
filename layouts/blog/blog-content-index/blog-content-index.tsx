"use client";

import Image from "next/image";
import React, { useState } from "react";
import BlogSidebar1 from "@/public/assets/blog-sidebar-1.png";
import BlogSidebar2 from "@/public/assets/blog-sidebar-2.png";
import { BlogData } from "@/shared/type";

export default function BlogIndex({ dataBlog }: { dataBlog: BlogData }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const headers = dataBlog.content.blocks
    .filter(
      (block: any) =>
        block.type === "heading-two" || block.type === "heading-three"
    )
    .map((block: any, index: any) => ({
      key: block.key,
      text: block.text,
      type: block.type,
      id: `header-${block.key}`,
    }));

  return (
    <div className="flex flex-col">
      <div className="text-xl font-bold mb-6">Nội Dung Bài Viết</div>
      <ul>
        {headers.map((header: any) => (
          <li
            key={header.key}
            className={`cursor-pointer text-sm transition-all mb-2 ${
              header.type === "heading-two" ? "" : "ml-4"
            } ${selectedId === header.id ? "text-green-500 font-semibold" : ""}`}
            onClick={() => {
              setSelectedId(header.id);
              document
                .getElementById(header.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {header.text}
          </li>
        ))}
      </ul>

      <div className="my-8 hidden md:block">
        <Image
          src={BlogSidebar1}
          alt="Banner"
          width={1200}
          height={400}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="my-8 hidden md:block">
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
