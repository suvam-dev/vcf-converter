import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex from-gray-200 border-b border-gray-300 to-gray-100 bg-gradient-to-b px-4 py-5 flex-row justify-between items-center w-full">
        <div className="text-violet-600 font-bold flex flex-row gap-2 items-center">
          <div className="text-xl">VCF Converter</div>
        </div>
        <div className={`text-gray-700/80 font-bold gap-4 ${menu ? "flex flex-col absolute top-full right-0 bg-gray-100 p-4 shadow-md items-center border-b border-gray-300 sm:relative sm:top-auto sm:p-0 sm:shadow-none sm:bg-transparent sm:border-none sm:flex-row sm:w-auto" : "hidden sm:flex sm:flex-row"}`}>
          <a href="#" className="hover:underline underline-offset-4 hover:text-blue-700 transition-all p-2 rounded-sm cursor-pointer hover:bg-indigo-300/40 w-full text-center sm:w-auto">Home</a>
          <a href="#about" className="hover:underline underline-offset-4 hover:text-blue-700 transition-all p-2 rounded-sm cursor-pointer hover:bg-indigo-300/40 w-full text-center sm:w-auto">About</a>
          <a href="https://github.com/suvam-dev" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4 hover:text-blue-700 transition-all p-2 rounded-sm cursor-pointer hover:bg-indigo-300/40 w-full text-center sm:w-auto">GitHub</a>
        </div>
        <button className="hamburger max-sm:block hidden" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

