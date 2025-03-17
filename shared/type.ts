import { StaticImageData } from "next/image";

export interface Blog {
  title: string;
  image: StaticImageData;
  createdAt: string;
  readTime: number;
  type: string;
}

export interface BlogData {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  readTime: number;
  author: string;
  avatar: string | StaticImageData;
  content: any;
}
