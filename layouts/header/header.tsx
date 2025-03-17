"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import VNIcon from "@/public/assets/vietnam.png";
import USIcon from "@/public/assets/us.png";
import Logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";

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
}: {
  item: NavItem;
  isOpen: boolean;
  setOpenItem: (label: string | null) => void;
}) => {
  const router = useRouter();

  const handleClick = (item: NavItem) => {
    if (item.subItems.length > 0) {
      setOpenItem(isOpen ? null : item.label);
    } else {
      router.replace(item.url);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => handleClick(item)}
        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition"
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
        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50">
          {item.subItems.map((sub, index) => (
            <li
              onClick={() => handleClick(sub)}
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {sub.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Header() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="flex justify-between items-center rounded-full bg-white py-4 px-10 shadow-md">
      <div onClick={() => router.replace("/")} className="cursor-pointer">
        <Image src={Logo} alt="logo" width={100} height={100} />
      </div>

      {/* Navigation */}
      <div className="flex space-x-6">
        {navItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isOpen={openItem === item.label}
            setOpenItem={setOpenItem}
          />
        ))}
      </div>

      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition"
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
          <ul className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md border border-gray-200 z-50">
            {languages.map((lang, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  lang.code === selectedLang.code ? "font-semibold" : ""
                }`}
                onClick={() => {
                  setSelectedLang(lang);
                  setIsLangOpen(false);
                }}
              >
                <Image src={lang.icon} alt={lang.name} width={20} height={20} />
                {lang.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA Button */}
      <Button>Trở thành khách hàng</Button>
    </div>
  );
}
