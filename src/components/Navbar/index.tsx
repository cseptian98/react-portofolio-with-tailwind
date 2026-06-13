import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar = ({darkMode, setDarkMode} : NavbarProps) => {
  const handleToggle = (event: React.MouseEvent<SVGElement>) => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as any;

    if (!doc.startViewTransition || isReducedMotion) {
      setDarkMode(!darkMode);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setDarkMode(!darkMode);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <nav className="px-12 py-8 flex justify-between">
      <h1 className="text-2xl font-tomorrow text-primary-dark dark:text-second-light">
        CSeptian
      </h1>
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsFillSunFill
              onClick={handleToggle}
              className="cursor-pointer text-2xl dark:text-yellow-400"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={handleToggle}
              className="cursor-pointer text-2xl text-yellow-400"
            />
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
