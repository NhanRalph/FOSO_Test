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
      <div className="p-4 md:col-span-7">{leftContent}</div>

      <div className="p-4 mt-10 md:col-span-3">{rightContent}</div>
    </div>
  );
}
