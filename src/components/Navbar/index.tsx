import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar = ({darkMode, setDarkMode} : NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-4 flex justify-between items-center bg-second-light/70 dark:bg-primary-dark/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-primary-dark dark:text-second-light hover:text-primary-light transition-colors">
        CSeptian
      </h1>
      <ul className="flex items-center">
        <li>
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
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
