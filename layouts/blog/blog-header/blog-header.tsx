import React from 'react'

export default function BlogHeader() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-10 pt-0'>
        <div className='text-5xl'> 
          <span>
            Blog
          </span>
          <span className="mx-2 font-bold ellipsis bg-gradient-to-br from-[#53B086] via-[#85EEB3B5] to-[#53B086] bg-clip-text text-transparent">
            FOSO
          </span>
          <span>
            -
          </span>
        </div>
        <div className='text-5xl'>
  <span>
    Cập Nhật Tin Tức
  </span>
  <span className="mx-2 font-bold relative inline-block">
    <span className='relative z-10'>Mới Nhất</span>
    <div className='w-full absolute bottom-0 left-0 h-4 bg-[#85EEB3B5] rounded-lg z-0'></div>
  </span>
</div>

        <div className='text-sm'>Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!</div>
    </div>
  )
}
