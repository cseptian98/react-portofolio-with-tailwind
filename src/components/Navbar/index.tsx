import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar = ({darkMode, setDarkMode} : NavbarProps) => {
  return (
    <nav className="px-12 py-8 flex justify-between">
      <h1 className="text-2xl font-tomorrow text-primary-dark dark:text-second-light">
        CSeptian
      </h1>
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsFillSunFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-yellow-400"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl text-yellow-400"
            />
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
