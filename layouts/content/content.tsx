"use client";

export default function Content({ leftContent, rightContent }: { leftContent: React.ReactNode; rightContent: React.ReactNode }) {
  return (
    <div className="grid grid-cols-10 gap-4">
      {/* Phần bên trái (70%) */}
      <div className="col-span-7 p-4">{leftContent}</div>

      {/* Phần bên phải (30%) */}
      <div className="col-span-3 p-4">{rightContent}</div>
    </div>
  );
}
