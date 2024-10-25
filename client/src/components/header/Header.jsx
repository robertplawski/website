import { useEffect, useState } from "react";
import "./Header.css";
import { Navigation } from "./nav/Navigation";

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
      <a href="#">
        <b>
          <p>Robert Pławski</p>
        </b>
      </a>
      <Navigation />
    </header>
  );
}
