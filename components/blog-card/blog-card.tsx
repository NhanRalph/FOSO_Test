import { Blog } from '@/shared/type'
import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function BlogCard({blog, index}: {blog: Blog, index: number}) {
  const router = useRouter();

  return (
    <div 
      key={index} 
      className="flex flex-col gap-4 hover:relative hover:border-b-2 hover:border-gray-500 cursor-pointer pb-2 group"
      onClick={() => router.push(`/tai-nguyen/blog/quan-li-san-xuat`)}
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={blog.image}
          alt={blog.title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-125"
        />
      </div>
      <div>
        <Badge variant="info">{blog.type}</Badge>
      </div>
      <div className="text-lg font-bold group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-500" style={{ height: 100}}>{blog.title}</div>
      <div className="flex flex-row gap-4 text-gray-500 dark:text-gray-400">
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