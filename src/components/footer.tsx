"use client";

export default function Footer() {
  const date = new Date();
  return (
    <>
      <footer className="flex h-[220px] max-h-[220px] overflow-y-auto justify-center items-center bg-[#FAFAFA] shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.1)]">
        <ul className="flex gap-[60px]">
          <li>©{date.getFullYear()} Food Diary. All rights reserved.</li>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </footer>
    </>
  );
}
