import { useContext } from "react";
import "../nav/Navigation.css";
import { InternationalizationContext } from "../../contexts/InternationalizationContext";

export function Navigation() {
  const {lookup:l} = useContext(InternationalizationContext);

  return (
    <>
      <nav className="desktop">
        <a href="#about" aria-label="About section">
          <p>{l`about-me`}</p>
        </a>
        <a href="#portfolio" aria-label="Porfolio section">
          <p>{l`portfolio`}</p>
        </a>
      </nav>
    </>
  );
}
