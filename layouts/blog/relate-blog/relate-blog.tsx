"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "@/components/blog-card/blog-card";
import { blogs } from "@/shared/data";

export function RelateBlog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  
  // Chia blogs thành từng nhóm 3 phần tử
  const totalGroups = Math.ceil(blogs.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalGroups - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalGroups - 1
    );
  };

  return (
    <section className="container py-8 px-4 w-4/5 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold dark:text-gray-200">
          Bài Viết Liên Quan
        </h2>
        <div className="flex gap-2">
          <Button
            className="border-transparent"
            variant="outline"
            size="icon"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            className="border-transparent"
            variant="outline"
            size="icon"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        {blogs
          .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
          .map((blog, index) => (
            <div key={index} className="w-1/3">
                <BlogCard blog={blog} index={index} />
            </div>
          ))}
      </div>
    </section>
  );
}
