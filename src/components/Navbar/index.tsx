import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar = ({darkMode, setDarkMode} : NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-4 flex justify-between items-center bg-second-light/70 dark:bg-primary-dark/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary-light dark:border-second-light shadow-sm">
          <Image src="/Profile-Circular.png" alt="Profile-Cilcular" fill className="object-cover" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-primary-dark dark:text-second-light hover:text-primary-light transition-colors">
          CSeptian
        </h1>
      </Link>
      
      <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-lg font-semibold text-gray-700 dark:text-gray-300">
        <li><Link href="/#services" className="hover:text-primary-light dark:hover:text-white transition-colors">Services</Link></li>
        <li><Link href="/#experience" className="hover:text-primary-light dark:hover:text-white transition-colors">Experience</Link></li>
        <li><Link href="/#projects" className="hover:text-primary-light dark:hover:text-white transition-colors">Projects</Link></li>
        <li><Link href="/#technologies" className="hover:text-primary-light dark:hover:text-white transition-colors">Technologies</Link></li>
      </ul>

      <div className="flex items-center">
        {darkMode ? (
          <BsFillSunFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl text-yellow-400 hover:scale-110 transition-transform"
          />
        ) : (
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl text-yellow-500 hover:scale-110 transition-transform"
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar;
