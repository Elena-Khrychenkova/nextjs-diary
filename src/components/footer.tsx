"use client";

export default function Footer() {
  const date = new Date();
  return (
    <>
      <footer className="flex h-[220px] max-h-[220px] overflow-y-auto justify-center items-center border border-t-gray-200">
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
