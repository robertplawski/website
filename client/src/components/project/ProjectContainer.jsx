import "./ProjectContainer.css";
import { Project } from "./Project.jsx";
import {
  SiMongodb,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiProxmox,
  SiCloudflare,
  SiSocketdotio,
  SiHtml5,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
import cardGameVideo from "../../assets/projects/cardGameVideo.webm";
import pingPongVideo from "../../assets/projects/pingPongVideo.webm";
export function ProjectContainer() {
  const projects = [
    {
      title: { pl: "robertplawski.pl" },
      description: {
        pl: "**To ta strona, którą właśnie oglądasz.** Ta strona jest zrobiona w MERN, czyli MongoDb, Express, React i Nodejs. Strona jest hostowana na domowym serwerze w kontenerze proxmox oraz korzysta z cloudflare dns.",
      },
      showFull: true,
      tags: [
        <SiMongodb size={20} key={0} />,
        <SiExpress size={20} key={1} />,
        <SiReact size={20} key={2} />,
        <SiNodedotjs size={20} key={3} />,
        <SiProxmox size={20} key={5} />,
        <SiCloudflare size={20} key={7} />,
      ],
      customButtons: <p style={{ fontWeight: "bold" }}>Jesteś tutaj!</p>,
      timestamp: 1729934691000,
      repositoryUrl: "https://github.com/robertplawski/website",
    },
    {
      title: { pl: "'NO!' Gra karciana" },
      cta: { pl: "Kliknij tutaj aby zagrać!" },
      thumbnailVideoSrc: cardGameVideo,
      thumbnailVideoPlaybackRate: 1.2,
      description: {
        pl: "Zagraj z swoimi przyjaciółmi, gra bazowana na popularnej grze UNO. ",
      },
      repositoryUrl: "https://github.com/robertplawski/a-card-game",
      demoUrl: "https://play-no-card-game.robertplawski.pl/",
      tags: [
        <SiReact size={20} key={0} />,
        <SiSocketdotio size={20} key={1} />,
      ],
      timestamp: 1690161989000,
    },
    {
      title: { pl: "Ping-Pong" },
      thumbnailVideoPlaybackRate: 2,
      thumbnailVideoSrc: pingPongVideo,
      cta: { pl: "Zagraj już teraz!" },
      description: {
        pl: "Prosta gra pong! Graj z komputerem, albo ze znajomymi! ",
      },
      timestamp: 1685397600000,
      tags: [
        <SiHtml5 key={0} size={20} />,
        <SiCss3 key={1} size={20} />,
        <SiJavascript size={20} key={2} />,
      ],
      repositoryUrl: "https://github.com/robertplawski/ping-pong",
      demoUrl: "https://robertplawski.github.io/ping-pong/",
    },
  ];
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}
