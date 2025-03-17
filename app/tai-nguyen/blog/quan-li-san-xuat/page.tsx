"use client";

import BlogViewer from "@/layouts/blog/blog-content-detail/blog-content-detail";
import Content from "@/layouts/content/content";
import React from "react";
import BlogIndex from "@/layouts/blog/blog-content-index/blog-content-index";
import { dataBlogDetail } from "@/shared/data";
import { RelateBlog } from "@/layouts/blog/relate-blog/relate-blog";
import ShareSocial from "@/components/share-social/share-social";
  

export default function BlogPageQuanli() {

  return (
    <div className="">
      <Content leftContent={<BlogViewer dataBlog={dataBlogDetail} />} rightContent={<BlogIndex dataBlog={dataBlogDetail} />} />
      <RelateBlog />
      <ShareSocial />
    </div>
  );
}