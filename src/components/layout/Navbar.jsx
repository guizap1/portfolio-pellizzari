import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineDocumentText,
  HiOutlineCodeBracket,
  HiOutlineRectangleGroup,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { ThemeToggle } from "../ThemeToggle";

const Navbar = ({ theme, toggleTheme }) => {
  const baseLinkClasses =
    "text-2xl text-text-secondary hover:text-accent transition-colors duration-200";
  const getLinkClassName = ({ isActive }) =>
    isActive ? `${baseLinkClasses} text-accent` : baseLinkClasses;

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-4 py-3 bg-card/60 border border-card-border rounded-full backdrop-blur-md">
        {/* NavLinks*/}
        <NavLink to="/" className={getLinkClassName}>
          <HiOutlineHome />
        </NavLink>
        <NavLink to="/sobre" className={getLinkClassName}>
          <HiOutlineUserCircle />
        </NavLink>
        <NavLink to="/resumo" className={getLinkClassName}>
          <HiOutlineDocumentText />
        </NavLink>
        <NavLink to="/habilidades" className={getLinkClassName}>
          <HiOutlineCodeBracket />
        </NavLink>
        <NavLink to="/portfolio" className={getLinkClassName}>
          <HiOutlineRectangleGroup />
        </NavLink>
        <NavLink to="/contato" className={getLinkClassName}>
          <HiOutlineEnvelope />
        </NavLink>

        {/*props passadas para o ThemeToggle */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
