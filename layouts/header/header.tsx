"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import VNIcon from "@/public/assets/vietnam.png";
import USIcon from "@/public/assets/us.png";
import Logo from "@/public/assets/logo.png";
import { useRouter, usePathname } from "next/navigation";

interface NavItem {
  label: string;
  url: string;
  subItems: NavItem[] | [];
}

const navItems: NavItem[] = [
  { label: "Về chúng tôi", url: "/ve-chung-toi", subItems: [] },
  {
    label: "Giải pháp",
    url: "/giai-phap",
    subItems: [
      { label: "Giải pháp 1", url: "/giai-phap/giai-phap-1", subItems: [] },
      { label: "Giải pháp 2", url: "/giai-phap/giai-phap-2", subItems: [] },
    ],
  },
  {
    label: "Tài nguyên",
    url: "/tai-nguyen",
    subItems: [
      { label: "Blog", url: "/tai-nguyen/blog", subItems: [] },
      { label: "Tài nguyên 2", url: "/tai-nguyen/tai-nguyen-2", subItems: [] },
    ],
  },
  { label: "Liên hệ", url: "/lien-he", subItems: [] },
];

const languages = [
  { name: "VI", icon: VNIcon, code: "vn" },
  { name: "EN", icon: USIcon, code: "en" },
];

const MenuItem = ({
  item,
  isOpen,
  setOpenItem,
  currentPath,
}: {
  item: NavItem;
  isOpen: boolean;
  setOpenItem: (label: string | null) => void;
  currentPath: string;
}) => {
  const router = useRouter();
  const isActive = currentPath === item.url;
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = (item: NavItem, isSubItem = false) => {
    if (item.subItems.length > 0) {
      setOpenItem(isOpen ? null : item.label);
    } else {
      router.replace(item.url);
      if (!isSubItem) {
        setOpenItem(null); // Chỉ đóng menu nếu là mục chính
      }
    }
  };

  const handleSubItemClick = (subItem: NavItem) => {
    router.replace(subItem.url);
    setOpenItem(null); // Đóng menu sau khi chuyển hướng
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenItem(null);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setOpenItem]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => handleClick(item)}
        className={`flex items-center gap-2 px-1 lg:px-2 py-2 rounded-md transition-all duration-300 
          ${
            isActive
              ? "font-bold text-green-500 dark:text-green-400"
              : "text-gray-700 dark:text-gray-200"
          } 
          hover:text-green-500 dark:hover:text-green-400 hover:tracking-widest`}
      >
        {item.label}
        {item.subItems.length > 0 && (
          <ChevronDown
            size={18}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {isOpen && item.subItems.length > 0 && (
        <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-[#1E1E1E] shadow-lg rounded-md border border-gray-200 dark:border-gray-700 z-50">
          {item.subItems.map((sub, index) => (
            <li
              onClick={() => handleSubItemClick(sub)}
              key={index}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2D2D2D] cursor-pointer"
            >
              {sub.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface SubMenuProps {
  subItems: NavItem[];
  onNavigate: (url: string) => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ subItems, onNavigate }) => {
  return (
    <ul className="ml-4 border-l border-gray-300 dark:border-gray-600 mt-2">
      {subItems.map((sub, index) => (
        <li
          key={index}
          onClick={() => onNavigate(sub.url)}
          className="py-2 pl-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2D2D2D]"
        >
          {sub.label}
        </li>
      ))}
    </ul>
  );
};

interface MenuItemProps {
  item: NavItem;
  onNavigate: (url: string) => void;
}

const MenuItemMobile: React.FC<MenuItemProps> = ({ item, onNavigate }) => {
  return (
    <div className="mb-2 bg-white dark:bg-[#1E1E1E]">
      <button
        onClick={() => onNavigate(item.url)}
        className="block w-full text-left py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-[#2D2D2D]"
      >
        {item.label}
      </button>

      {/* Hiển thị tất cả subItems ngay từ đầu */}
      {item.subItems && (
        <SubMenu subItems={item.subItems} onNavigate={onNavigate} />
      )}
    </div>
  );
};

export default function Header() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const firstPathSegment = "/" + pathname.split("/")[1];

  const handleNavigation = (url: string) => {
    router.replace(url);
    setIsMenuOpen(false); // Đóng menu sau khi điều hướng
  };

  return (
    <div className="flex flex-col w-full md:w-[90%] lg:w-[80%] mx-auto mt-0 md:mt-2 justify-between items-center rounded-full bg-white dark:bg-[#00290030] py-4 px-10 shadow-md dark:shadow-green-950 backdrop-blur-md">
      <div className="flex items-center justify-between w-full">
        <div onClick={() => router.replace("/")} className="cursor-pointer">
          <Image src={Logo} alt="logo" width={100} height={100} />
        </div>

        <div className="hidden lg:flex justify-center space-x-10 w-full mt-2">
        {navItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isOpen={openItem === item.label}
            setOpenItem={setOpenItem}
            currentPath={firstPathSegment}
          />
        ))}
      </div>

        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-100 dark:bg-[#00000050] dark:hover:bg-[#00000080] transition"
            >
              <Image
                src={selectedLang.icon}
                alt={selectedLang.name}
                width={20}
                height={20}
              />
              <span>{selectedLang.name}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#1E1E1E] shadow-lg rounded-md border border-gray-200 dark:border-gray-700 z-50">
                {languages.map((lang, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2D2D2D] cursor-pointer ${
                      lang.code === selectedLang.code ? "font-semibold" : ""
                    }`}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsLangOpen(false);
                    }}
                  >
                    <Image
                      src={lang.icon}
                      alt={lang.name}
                      width={20}
                      height={20}
                    />
                    {lang.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button className="flex flex-row gap-2 rounded-full bg-green-400 hover:bg-green-500 text-black">
            <span>Tham gia</span>
            <div className="p-1 rounded-full bg-black rotate-45">
              <ArrowUp size={16} color="white" />
            </div>
          </Button>

          {/* Button for mobile */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-row gap-2 rounded-full bg-green-400 hover:bg-green-500 text-black"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div
            className="absolute top-0 bottom-0 left-0 right-0 w-full bg-white dark:bg-[#1E1E1E] z-50 flex transition duration-300"
            style={{ height: "100vh", zIndex: 999 }}
          >
            <div className="w-full shadow-lg p-5 flex flex-col">
              <div className="flex justify-between items-center mb-6">

                <div onClick={() => handleNavigation("/")} className="cursor-pointer">
                  <Image src={Logo} alt="logo" width={80} height={80} />
                </div>
                <Button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </Button>
              </div>

              {navItems.map((item, index) => (
                <MenuItemMobile
                  key={index}
                  item={item}
                  onNavigate={handleNavigation}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="hidden md:flex lg:hidden justify-center space-x-10 w-full mt-2">
        {navItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isOpen={openItem === item.label}
            setOpenItem={setOpenItem}
            currentPath={firstPathSegment}
          />
        ))}
      </div>
    </div>
  );
}
