import { Blog } from '@/shared/type'
import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '../ui/button'

export default function BlogCard({blog, index}: {blog: Blog, index: number}) {
  return (
    <div key={index} className="flex flex-col gap-4 hover:relative hover:-top-1 transition-all duration-300 cursor-pointer">
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
    <div className="text-lg font-bold" style={{ height: 100}}>{blog.title}</div>
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
  )
}
