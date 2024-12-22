import { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import { Navigation } from "./nav/Navigation";
import { FaEnvelope, FaGithub, FaBluesky, FaItchIo, FaPhone } from "react-icons/fa6";
import { InternationalizationButton } from "../buttons/InternationalizationButton";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { ModalContext } from "../contexts/ModalContext";

import Markdown from "react-markdown";
import { InternationalizationContext } from "../contexts/InternationalizationContext";

export function Header() {
  const {lookup:l} = useContext(InternationalizationContext);
  const {openModal} = useContext(ModalContext);
  const spawnButtonRef = useRef();
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
        <InternationalizationButton/>
        <button ref={spawnButtonRef} className="no-appearance" aria-label="Contact me" onClick={()=>openModal(
              <><h2><b>{l`contact-me`}</b></h2>
        <div className="contact-me">
      
          <a href="mailto:dev@robertplawski.pl" className="basic-row" aria-label="Email contact">
            <FaEnvelope size={24} />
            <p>Email </p>
          </a>
          <a href="https://github.com/robertplawski" className="basic-row" aria-label="Github account">
            <FaGithub size={24} />
            <p>{l`github-account`}</p>
          </a>
          <a
            href="https://bsky.app/profile/robertplawski.pl"
            aria-label="Bluesky account"
            className="basic-row"
          >
            <FaBluesky size={24} />
            <p>Bluesky</p>
          </a>
        </div></>
          , spawnButtonRef.current
          )}>

        <IoChatbubbleEllipsesOutline size={24} />
        </button>
        {/*
     >*/}
      </div>
    </header>
  );
}
