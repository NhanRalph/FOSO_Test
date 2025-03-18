"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

// Map slug -> Tiếng Việt
const slugToTitleMap: { [key: string]: string } = {
  "ve-chung-toi": "Về Chúng Tôi",

  "giai-phap": "Giải Pháp",
  "giai-phap-1": "Giải Pháp 1",
  "giai-phap-2": "Giải Pháp 2",

  "tai-nguyen": "Tài Nguyên",
  "tai-nguyen-2": "Tài Nguyên 2",
  "blog": "Blog",
  "quan-li-san-xuat": "Quản Lí Sản Xuất",
  "quan-ly-ban-hang": "Quản Lí Bán Hàng",
  "thiet-ke-website": "Thiết Kế Website",
  "thiet-ke-app-mobile": "Thiết Kế App Mobile",
  "bao-chi-noi-ve-foso": "Báo Chí Nói Về FOSO",
  "tin-tuc-foso": "Tin Tức FOSO",
  "tat-ca": "Tất cả",

  "lien-he": "Liên Hệ",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb" className="hidden sm:flex items-center text-gray-600 dark:text-zinc-200 text-sm p-10 w-[90%] md:w-4/5 mx-auto">
      <Link href="/" className="flex items-center hover:text-gray-800 dark:hover:text-green-400">
        <Home size={18} />
      </Link>

      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;
        const displayText = slugToTitleMap[segment] || decodeURIComponent(segment); // Chuyển slug thành Tiếng Việt

        return (
          <div key={href} className="flex items-center">
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            {isLast ? (
              <span className="text-green-500 font-medium font-semibold">{displayText}</span>
            ) : (
              <Link href={href} className="hover:text-gray-800 dark:hover:text-green-400 capitalize">
                {displayText}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
