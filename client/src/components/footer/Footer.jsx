import { useContext } from "react";
import { InternationalizationContext } from "../contexts/InternationalizationContext";
import "./Footer.css";
export function Footer() {
  const {lookup:l,language} = useContext(InternationalizationContext);
  return (
    <footer>
      <p>{l`copyright`} {new Date().getFullYear()} &copy; Robert Pławski</p>
    </footer>
  );
}
