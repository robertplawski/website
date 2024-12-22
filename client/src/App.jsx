import "./App.css";
import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { ProjectContainer } from "./components/project/ProjectContainer.jsx";
import {
  SiCloudflare,
  SiCplusplus,
  SiCss3,
  SiDebian,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiProxmox,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiVim,
  SiVisualstudiocode,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandOauth} from "react-icons/tb";
import { PronunciationButton } from "./components/buttons/PronunciationButton.jsx";
import { InternationalizationContext } from "./components/contexts/InternationalizationContext.jsx";
import { useContext } from "react";
import Markdown from "react-markdown";
function App() {
  const {lookup:l,language} = useContext(InternationalizationContext);

  return (
    <>
      <main>
        <Header />
        <section
          style={{ height: "calc(100vh-3.5rem)" }}
          className="fullpage-container text-center"
        >
          {language != "pl-PL" && <div className="ipa-container"><h3>(rˈɔbɛrt pwˈafski)</h3> 
            <PronunciationButton/>
          </div>}
          <h1>Robert Pławski</h1>
          <h2>Junior developer</h2>
          <div className="cta-container">
            <p>{l`about-me-alt`}</p>
            <a href="#about">
              <p className="cta-arrow">↓</p>
            </a>
          </div>
        </section>
        <section id="about" className="fullpage-container">
          <Markdown className='story'>{l`story`}</Markdown>
          
          <div className="logos-container">
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiTailwindcss />
            <SiReact />
            <SiVuedotjs />
            <SiNodedotjs />
            <SiExpress />
            <SiSocketdotio />
            <TbBrandOauth />
            <SiJsonwebtokens />
            <SiMysql />
            <SiPostgresql />
            <SiMongodb />
            <SiGit />
            <SiGithub />
            <SiNpm />
            <SiCloudflare />
            <SiPython />
            <SiCplusplus />
            <SiVisualstudiocode />
            <SiPostman />
            <SiVim />
            <SiLinux />
            <SiDebian />
            <SiProxmox />
          </div>
        </section>

        <section id="portfolio" className="fullpage-container">
          <h2>{l`portfolio`}</h2>
          <p>{l`portfolio-description`}</p>
          <ProjectContainer />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
