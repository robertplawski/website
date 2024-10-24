import { useEffect, useState } from "react";
import "./Header.css";

export function Header() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
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
      <a href="#">
        <b>
          <p>Robert Pławski</p>
        </b>
      </a>
      <nav>
        <a href="#about">
          <p>about</p>
        </a>
        <a href="#portfolio">
          <p>portfolio</p>
        </a>
        <a href="#resume">
          <p>resume</p>
        </a>
        <a href="#social">
          <p>socials</p>
        </a>
        <a href="#blog">
          <p>blog</p>
        </a>
        <a href="#login">
          <p>login</p>
        </a>
      </nav>
    </header>
  );
}
