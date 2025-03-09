import { useContext } from "react";
import { InternationalizationContext } from "../contexts/InternationalizationContext";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";
export function Footer() {
  const { lookup: l, language } = useContext(InternationalizationContext);
  return (
    <footer>
      <Fade direction="up" delay={500}>
        <p>
          {l`copyright`} {new Date().getFullYear()} &copy; Robert Pławski,
          e@rplawski.pl / dev@robertplawski.pl
        </p>
      </Fade>
    </footer>
  );
}
