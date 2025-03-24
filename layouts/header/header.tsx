"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import VNIcon from "@/public/assets/vietnam.png";
import USIcon from "@/public/assets/us.png";
import Logo from "@/public/assets/logo.png";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleClick = (item: NavItem) => {
    if (item.subItems.length > 0) {
      setOpenItem(isOpen ? null : item.label);
    } else {
      router.replace(item.url);
    }
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
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 
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
              onClick={() => handleClick(sub)}
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

interface MobileMenuItemProps {
  item: NavItem;
  onNavigate: (url: string) => void;
  isActive: boolean;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  item,
  onNavigate,
  isActive,
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() =>
            item.subItems.length > 0 ? toggleExpand() : onNavigate(item.url)
          }
          className={`text-lg py-3 font-medium transition-all ${
            isActive
              ? "text-green-500 dark:text-green-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {item.label}
        </button>

        {item.subItems.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpand}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <ChevronDown
              size={20}
              className={`transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </Button>
        )}
      </div>

      {isExpanded && item.subItems.length > 0 && (
        <div className="mt-2 ml-4 pl-4 border-l-2 border-green-400 dark:border-green-500 space-y-3">
          {item.subItems.map((sub, index) => (
            <div
              key={index}
              onClick={() => onNavigate(sub.url)}
              className="py-2 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
            >
              {sub.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [openItem2, setOpenItem2] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const firstPathSegment = "/" + pathname.split("/")[1];

  const handleNavigation = (url: string) => {
    router.replace(url);
    setIsMenuOpen(false);
  };

  const toggleMobileExpand = (itemLabel: string) => {
    if (expandedMobileItems.includes(itemLabel)) {
      setExpandedMobileItems(
        expandedMobileItems.filter((item) => item !== itemLabel)
      );
    } else {
      setExpandedMobileItems([...expandedMobileItems, itemLabel]);
    }
  };

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 " style={{ zIndex: 1000 }}>
      <div className="flex flex-col w-full md:w-[90%] lg:w-[80%] mx-auto mt-0 md:mt-2 justify-between items-center rounded-full bg-white dark:bg-[#00290030] py-4 px-10 shadow-md dark:shadow-green-950 backdrop-blur-md">
        <div className="flex items-center justify-between w-full">
          <div onClick={() => router.replace("/")} className="cursor-pointer">
            <Image src={Logo} alt="logo" width={100} height={100} />
          </div>

          <div className="hidden lg:flex justify-center items-center space-x-10 w-full">
            {navItems.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isOpen={openItem2 === item.label}
                setOpenItem={setOpenItem2}
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

            <Button className="hidden md:flex flex-row gap-2 rounded-full bg-green-400 hover:bg-green-500 text-black">
              <span>Tham gia</span>
              <div className="p-1 rounded-full bg-black rotate-45">
                <ArrowUp size={16} color="white" />
              </div>
            </Button>

            {/* Button for mobile */}
            <div className="md:hidden">
              <Button
                onClick={() => setIsMenuOpen(true)}
                variant="ghost"
                className="flex flex-row gap-2 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#00000050]"
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 w-full h-screen flex flex-col"
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full bg-white dark:bg-[#121212] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                      <div
                        onClick={() => handleNavigation("/")}
                        className="cursor-pointer"
                      >
                        <Image src={Logo} alt="logo" width={80} height={80} />
                      </div>
                      <Button
                        onClick={() => setIsMenuOpen(false)}
                        variant="ghost"
                        className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <X size={20} />
                      </Button>
                    </div>

                    <div className="space-y-1 mb-8">
                      {navItems.map((item, index) => (
                        <MobileMenuItem
                          key={index}
                          item={item}
                          onNavigate={handleNavigation}
                          isActive={firstPathSegment === item.url}
                          isExpanded={expandedMobileItems.includes(item.label)}
                          toggleExpand={() => toggleMobileExpand(item.label)}
                        />
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                      <div className="flex flex-col gap-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Ngôn ngữ
                        </p>
                        <div className="flex space-x-4">
                          {languages.map((lang, index) => (
                            <button
                              key={index}
                              className={`flex items-center gap-2 px-4 py-2 rounded-full 
                        ${
                          lang.code === selectedLang.code
                            ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
                            : "bg-gray-100 dark:bg-gray-800"
                        }`}
                              onClick={() => setSelectedLang(lang)}
                            >
                              <Image
                                src={lang.icon}
                                alt={lang.name}
                                width={20}
                                height={20}
                              />
                              {lang.name}
                            </button>
                          ))}
                        </div>

                        <Button className="mt-4 w-full flex flex-row gap-2 rounded-full bg-green-400 hover:bg-green-500 text-black justify-center">
                          <span>Tham gia</span>
                          <div className="p-1 rounded-full bg-black rotate-45">
                            <ArrowUp size={16} color="white" />
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
    </div>
  );
}
