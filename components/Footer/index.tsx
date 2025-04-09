export const Footer = () => {
  return (
    <footer className="font-montserrat bg-second-light dark:bg-primary-dark text-primary-dark dark:text-second-light my-10 px-10">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        {/* Left - Name or Logo */}
        <div className="text-xl">
          <span className="text-second-light">Chandra Septian</span>
        </div>

        {/* Right - Copyright */}
        <div className="text-sm text-second-light text-center md:text-right">
          &copy; {new Date().getFullYear()} Chandra Septian. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
