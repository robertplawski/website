import "../nav/Navigation.css";

export function Navigation() {
  return (
    <>
      <nav className="desktop">
        <a href="#about" aria-label="About section">
          <p>o mnie</p>
        </a>
        <a href="#portfolio" aria-label="Porfolio section">
          <p>portfolio</p>
        </a>
      </nav>
    </>
  );
}
