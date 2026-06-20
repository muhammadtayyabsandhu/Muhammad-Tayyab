"use client";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-black to-slate-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-400 text-sm">
          © {currentYear} Muhammad Tayyab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
