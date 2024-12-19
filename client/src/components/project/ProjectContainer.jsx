import "./ProjectContainer.css";
import { Project } from "./Project.jsx";
import {
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiProxmox,
  SiCloudflare,
  SiSocketdotio,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPostgresql,
} from "react-icons/si";
import placeholderVideo from "../../assets/projects/placeholder.webm";
import cardGameVideo from "../../assets/projects/cardGameVideo.webm";
import pingPongVideo from "../../assets/projects/pingPongVideo.webm";
import { FaFilter } from "react-icons/fa6";
import { useState } from "react";

const localeCompare = (a,b,locale) => a[locale].localeCompare(b[locale],locale);

const FILTERS = {
  'all': ()=>true,
  'finished': (project)=>!project.workInProgress,
  'work-in-progress': (project)=>project.workInProgress
}

const SORTERS = {
  'default': (a,b) => 0,
  'latest': (a, b) => a.timestamp < b.timestamp ? 1 :  -1 ,
  'oldest' : (a, b) => a.timestamp > b.timestamp ? 1 :  -1 ,
  'alphabetically-ascending':  (a, b) =>  localeCompare(a.title,b.title,"pl"),
  'alphabetically-descending' : (a, b ) => localeCompare(b.title,a.title,"pl") ,
}

export function ProjectContainer() {
  const showcasedProject =   {
    title: { pl: "robertplawski.pl" },
    description: {
      pl: "**To ta strona, którą właśnie oglądasz.** Ta strona jest zrobiona w PERN, czyli PostgreSQL, Express, React i Nodejs. Strona jest hostowana na domowym serwerze w kontenerze lxc oraz korzysta z cloudflare dns.",
    },
    showFull: true,
    tags: [
      <SiPostgresql size={20} key={0} />,
      <SiExpress size={20} key={1} />,
      <SiReact size={20} key={2} />,
      <SiNodedotjs size={20} key={3} />,
      <SiProxmox size={20} key={5} />,
      <SiCloudflare size={20} key={7} />,
    ],
    customButtons: <p style={{ fontWeight: "bold" }}>Jesteś tutaj!</p>,
    repositoryUrl: "https://github.com/robertplawski/website",
  }
  const projects = [
  
    {
      title: { pl: "NO! Gra karciana" },
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
    {
      title: { pl: "Koło fortuny [WIP]" },
      cta: { pl: "Kliknij tutaj aby zagrać!" },
      thumbnailVideoPlaybackRate: 1.2,
      thumbnailVideoSrc:placeholderVideo,
      description: {
        pl: "Zagraj z swoimi przyjaciółmi, gra bazowana na sławnym teleturnieju.",
      },
      repositoryUrl: "https://github.com/robertplawski/kolo-fortuny",
      /*demoUrl: "https://play-no-card-game.robertplawski.pl/",*/
      tags: [
        <SiReact size={20} key={0} />,
        <SiSocketdotio size={20} key={1} />,
        <SiPostgresql size={20} key={2} />,
      ],
      workInProgress: true,
      timestamp: 1730553655000,
    },
    {
      title: { pl: "Kółko i krzyżyk [WIP]" },
      cta: { pl: "Kliknij tutaj aby zagrać!" },
      thumbnailVideoPlaybackRate: 1.2,
      thumbnailVideoSrc:placeholderVideo,
      description: {
        pl: "Klasyk gier podwórkowych! Graj z algorytmem na różnym poziomie. ",
      },
      /*repositoryUrl: "https://github.com/robertplawski/kolo-fortuny",
      demoUrl: "https://play-no-card-game.robertplawski.pl/",*/
      tags: [<SiReact size={20} key={0} />],

      workInProgress: true,
      timestamp: 1734614417000,
    },
    {
      title: { pl: "Kajet [WIP]" },
      cta: { pl: "Kliknij tutaj aby zagrać!" },
      thumbnailVideoPlaybackRate: 1.2,
      description: {
        pl: "Ta aplikacja zwiększy twoją produktywność. Aplikacja pozwala na tworzenie notatek, czy list.  ",
      },
      /*repositoryUrl: "https://github.com/robertplawski/kolo-fortuny",
      demoUrl: "https://play-no-card-game.robertplawski.pl/",*/
      hidden:true,
      tags: [
        <SiReact size={20} key={0} />,
        <SiSocketdotio size={20} key={1} />,
        <SiPostgresql size={20} key={3} />,
      ],

      workInProgress: true,
      timestamp: 1734614417000,
    },
  ];

  const [sort, setSort] = useState("default"); 
  const [filter, setFilter] = useState("all"); 

  return (
    <div>
      
      <div className="projects-header">
        <FaFilter />
        <b>Filtry i sortowanie</b>
        <div className="full-flex"></div>
        <select onChange={({target})=>setSort(target.value)}>
          <option value='default'>Domyślne</option>
          <option value='latest'>Od najnowszych</option>
          <option value='oldest'>Od najstarszych</option>
          <option value='alphabetically-ascending'>Od A do Z</option>
          <option value='alphabetically-descending'>Od Z do A</option>
        </select>

        <select onChange={({target})=>setFilter(target.value)}>
          <option value='all'>Wszystkie</option>
          <option value='finished'>Tylko ukończone</option>
          <option value='work-in-progress'>Tylko nieukończone</option>
        </select>
      </div>
      <div className="projects-container">

        <Project {...showcasedProject}/>
        {projects.filter(FILTERS[filter]).sort(SORTERS[sort]).map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>

      <div className="project-footer">
        <br />
        <a href="https://robertplawski.github.io/">
          Więcej projektów na <b>https://robertplawski.github.io/</b>
        </a>
      </div>
    </div>
  );
}
