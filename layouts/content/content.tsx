"use client";

export default function Content({
  leftContent,
  rightContent,
}: {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}) {
  return (
    <div className="w-[90%] lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-10 gap-4">
      {/* Phần bên phải (30%) hiển thị trước trên mobile, nhưng bên phải trên desktop */}
      <div className="p-4 mt-10 md:col-span-3 md:order-2">{rightContent}</div>

      {/* Phần bên trái (70%) hiển thị sau trên mobile, nhưng bên trái trên desktop */}
      <div className="p-4 md:col-span-7 md:order-1">{leftContent}</div>
    </div>
  );
}
