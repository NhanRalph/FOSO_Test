"use client";

import BlogContent from "@/layouts/blog/blog-content/blog-content";
import BlogHeader from "@/layouts/blog/blog-header/blog-header";
import BlogSidebar from "@/layouts/blog/blog-sidebar/blog-sidebar";
import Content from "@/layouts/content/content";
import React, { useState } from "react";
import { blogs } from "@/shared/data";
import BlogPagination from "@/layouts/blog/blog-pagination/blog-pagination";

export default function HomePage() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="">
      <BlogHeader />
      <Content leftContent={<BlogContent blogs={currentBlogs} />} rightContent={<BlogSidebar />} />
      
      <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}