"use client";

export default function Content({ leftContent, rightContent }: { leftContent: React.ReactNode; rightContent: React.ReactNode }) {
  return (
    <div className="w-4/5 mx-auto grid grid-cols-10 gap-4">
      {/* Phần bên trái (70%) */}
      <div className="col-span-7 p-4">{leftContent}</div>

      {/* Phần bên phải (30%) */}
      <div className="col-span-3 p-4">{rightContent}</div>
    </div>
  );
}
