import "./App.css";
import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import {
  Project,
  ProjectSmall,
  ProjectFull,
} from "./components/project/Project.jsx";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="fullpage-container text-center">
          <h1>Robert Pławski</h1>
          <h2>fullstack developer</h2>
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
            <li>devops: git, github, npm </li>
            <li> języki: javascript, python, c++ </li>
            <li>narzędzia: visual studio code, postman, vim </li>
            <li> systemy operacyjne: gnu/linux - debian, ubuntu,</li>
            <li> maszyny wirtualne: qemu/kvm, proxmox </li>
          </ul>
          <p className="story">
            Ta strona jest zrobiona w MERN, czyli MongoDb, Express, React i
            NodeJs. Strona jest hostowana na domowym serwerze w kontenerze
            proxmox.
          </p>
        </div>

        <div id="about" className="fullpage-container">
          <h2># Portfolio</h2>
          <p>Zobacz praktycznie, jak wyglądają moje projekty!</p>
          <div className="projects-container">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
        <div id="resume" className="text-center">
          <h2># Moje CV!</h2>
          <p className="story">Pobierz CV</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
