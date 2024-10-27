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
  SiPostman,
  SiProxmox,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiUbuntu,
  SiVim,
  SiVisualstudiocode,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
function App() {
  return (
    <>
      <div className="main">
        <Header />
        <div
          style={{ height: "calc(100vh-3.5rem)" }}
          className="fullpage-container text-center"
        >
          <h1>Robert Pławski</h1>
          <h2>Junior developer</h2>
          <div className="cta-container">
            <p>Poznaj mnie!</p>
            <a href="#about">
              <p className="cta-arrow">↓</p>
            </a>
          </div>
        </div>
        <div id="about" className="fullpage-container">
          <h2># Trochę o mnie!</h2>
          <p className="story">
            Z komputerami miałem styczność od urodzenia, jednak formalnie uczę
            się programowania od 2018 roku, kiedy na lekcjach informatyki w
            szkole poznałem język python. Od tamtego czasu moje zainteresowanie
            programowaniem i informatyką ogólnie rosło - uczyłem się nowych
            języków programowania, technologii czy systemów operacyjnych.
          </p>
          <p>W swojej niedługiej karierze, korzystałem z:</p>
          <ul>
            <li> frontend: html, css, js, tailwindcss, react, vue </li>
            <li> backend: node js, express, socket.io, oauth, jwt, </li>
            <li> bazy danych: mysql, mongodb </li>
            <li>devops: git, github, npm, cloudflare </li>
            <li> języki: javascript, python, c++ </li>
            <li>narzędzia: visual studio code, postman, vim </li>
            <li> systemy operacyjne: gnu/linux - debian, ubuntu,</li>
            <li> maszyny wirtualne: qemu/kvm, proxmox </li>
          </ul>

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
            <SiUbuntu />
            <SiProxmox />
          </div>
        </div>

        <div id="portfolio" className="fullpage-container">
          <h2># Portfolio</h2>
          <p>Zobacz praktycznie, jak wyglądają moje projekty!</p>
          <ProjectContainer />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
