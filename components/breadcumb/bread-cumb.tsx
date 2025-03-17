"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

// Map slug -> Tiếng Việt
const slugToTitleMap: { [key: string]: string } = {
  "tai-nguyen": "Tài Nguyên",
  "blog": "Blog",
  "ve-chung-toi": "Về Chúng Tôi",
  "giai-phap": "Giải Pháp",
  "lien-he": "Liên Hệ",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb" className="flex items-center text-gray-600 text-sm p-10">
      <Link href="/" className="flex items-center hover:text-gray-800">
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
              <span className="text-gray-900 font-medium">{displayText}</span>
            ) : (
              <Link href={href} className="hover:text-gray-800 capitalize">
                {displayText}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
