import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        <div className="flex-shrink-0 flex items-baseline space-x-2">
          <span className="text-3xl font-serif text-[#1e2733] font-medium tracking-widest">美share</span>
          <span className="text-[10px] text-gray-500 tracking-widest">株式会社</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {["会社について", "事業内容", "テクノロジー", "ニュース", "採用・パートナー", "お問い合わせ"].map((name) => (
            <Link key={name} href="/" className="text-[10px] font-sans text-gray-500 hover:text-gray-900 tracking-wider">
              {name}
            </Link>
          ))}
        </nav>

        <div className="flex-shrink-0 flex items-center space-x-6">
          <div className="flex space-x-4">
            {/* Instagram */}
            <a href="#" className="text-gray-700 hover:text-gray-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="text-gray-700 hover:text-gray-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-700 hover:text-gray-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <p className="text-[9px] text-gray-400 tracking-wider">
            &copy; 2024 Bshare Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
