import "../nav/Navigation.css";
import { MdMenu } from "react-icons/md";

export function Navigation() {
  const showMobileMenu = () => {
    alert(1);
  };
  return (
    <>
      <nav className="desktop">
        <a href="#about">
          <p>about</p>
        </a>
        <a href="#resume">
          <p>resume</p>
        </a>
        <a href="#portfolio">
          <p>portfolio</p>
        </a>

        <a href="#social">
          <p>socials</p>
        </a>
        <a href="#blog">
          <p>blog</p>
        </a>
      </nav>
      <nav className="mobile">
        <MdMenu
          className="mobileNavButton"
          size={24}
          onClick={showMobileMenu}
        />
      </nav>
    </>
  );
}
