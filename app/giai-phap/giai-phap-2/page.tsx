"use client";

import BlogContent from "@/layouts/blog/blog-content/blog-content";
import BlogHeader from "@/layouts/blog/blog-header/blog-header";
import BlogSidebar from "@/layouts/blog/blog-sidebar/blog-sidebar";
import Content from "@/layouts/content/content";
import React from "react";
// import LoadingSpinner from "@/components/components_v2/Loading/Loading";

export default function HomePage() {

  return (
    <div className="">
      <BlogHeader />
      <Content leftContent={<BlogContent />} rightContent={<BlogSidebar />} />
    </div>
  );
}