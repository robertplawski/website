import { useEffect, useState } from "react";
import "./Header.css";
import { Navigation } from "./nav/Navigation";
import {
  FaEnvelope,
  FaGithub,
  FaBluesky,
  FaSun,
  FaMoon,
} from "react-icons/fa6";

export function Header() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const handleScroll = (_event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrollTop > 0 ? "floating" : ""}>
      <div className="header-side">
        <a href="#">
          <b>
            <p>Robert Pławski</p>
          </b>
        </a>
      </div>
      <Navigation />
      <div className="header-side">
        <a href="mailto:dev@robertplawski.pl">
          <FaEnvelope size={24} />
        </a>
        <a href="https://github.com/robertplawski">
          <FaGithub size={24} />
        </a>
        <a href="https://bsky.app/profile/robertplawski.pl">
          <FaBluesky size={24} />
        </a>
      </div>
    </header>
  );
}
