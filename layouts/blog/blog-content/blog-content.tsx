import Image from "next/image";
import React, { useRef, useEffect } from "react";
import BlogBanner from "@/public/assets/blog-banner.png";
import BlogCard from "@/components/blog-card/blog-card";
import { Blog } from "@/shared/type";
import { motion, useAnimation } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  index?: number;
}

// const AnimateOnScroll = ({ children, index = 0 }: AnimateOnScrollProps) => {
//   const controls = useAnimation();
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Preload animation để giảm độ trễ
//     controls.set({ opacity: 0, y: 50 });
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Kích hoạt animation ngay khi phát hiện
//         if (entry.isIntersecting) {
//           controls.start({ 
//             opacity: 1, 
//             y: 0,
//             transition: { 
//               duration: 0.2, 
//               delay: index * 0.1, // Giảm delay xuống để hiệu ứng nhanh hơn
//             }
//           });
          
//           if (ref.current) {
//             observer.unobserve(ref.current);
//           }
//         }
//       },
//       {
//         threshold: 0,           // Phát hiện ngay khi bất kỳ phần nào của element xuất hiện
//         rootMargin: "0px 0px -5% 0px" // Trigger sớm hơn khi scroll
//       }
//     );

//     if (ref.current) {
//       // Kiểm tra ngay lập tức khi component mount
//       if (window.IntersectionObserver) {
//         observer.observe(ref.current);
//       } else {
//         // Fallback cho trình duyệt không hỗ trợ IntersectionObserver
//         controls.start({ opacity: 1, y: 0 });
//       }
//     }

//     return () => {
//       if (ref.current && window.IntersectionObserver) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [controls, index]);

//   return (
//     <div ref={ref} className="will-change-transform"> {/* Hint browser về transform */}
//       <motion.div
//         initial={false} // Không set initial ở đây mà để control.set xử lý
//         animate={controls}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// Phiên bản preload (hiển thị ngay khi scroll đến)
const PreloadedAnimateOnScroll = ({ children, index = 0 }: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  
  // Xác định vị trí scroll ban đầu
  const [isInView, setIsInView] = React.useState(false);
  
  useEffect(() => {
    // Kiểm tra ngay lập tức nếu phần tử đã trong viewport
    const checkInitialVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsInView(isVisible);
        if (isVisible) {
          setHasAnimated(true);
        }
      }
    };
    
    // Chạy ngay khi component mount
    checkInitialVisibility();
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -5% 0px" 
      }
    );

    if (ref.current && !hasAnimated) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={ref} className="will-change-transform">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.02 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function BlogContent({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="flex flex-col">
      <PreloadedAnimateOnScroll>
        <div className="text-2xl font-bold">Tất Cả Bài Viết</div>
      </PreloadedAnimateOnScroll>

      <PreloadedAnimateOnScroll index={1}>
        <div className="my-8">
          <Image
            src={BlogBanner}
            alt="Banner"
            width={1200}
            height={400}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </PreloadedAnimateOnScroll>

      {/* Grid blogs 2 cols, Image size 300 300 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {blogs.map((blog, index) => (
          <PreloadedAnimateOnScroll key={index} index={index + 2}>
            <BlogCard blog={blog} index={index} />
          </PreloadedAnimateOnScroll>
        ))}
      </div>
    </div>
  );
}