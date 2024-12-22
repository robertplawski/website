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
import { useContext, useState } from "react";
import { InternationalizationContext } from "../contexts/InternationalizationContext.jsx";


export function ProjectContainer() {
  const {lookup:l,language,DEFAULT_LANGUAGE} = useContext(InternationalizationContext);

  const showcasedProject =   {
    title: { "pl-PL": "robertplawski.pl","en-US":"robertplawski.pl" },
    description: {
      "pl-PL": "**To ta strona, którą właśnie oglądasz.** Ta strona jest zrobiona w PERN, czyli PostgreSQL, Express, React i Nodejs. Strona jest hostowana na domowym serwerze w kontenerze LXC oraz korzysta z Cloudflare DNS.",
      "en-US": "**This is the page you are currently viewing.** This page is built with PERN, which stands for PostgreSQL, Express, React and Nodejs. The page is hosted on a home server in an LXC container and uses Cloudflare DNS."
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
    customButtons: <p style={{ fontWeight: "bold" }}>{l`you-are-here`}</p>,
    repositoryUrl: "https://github.com/robertplawski/website",
  }
  const projects = [
  
    {
      title: { "pl-PL": "NO! Gra karciana", "en-US": "NO! Card game" },
      cta: { "pl-PL": "Kliknij tutaj aby zagrać!", "en-US": "Click here to play!" },
      thumbnailVideoSrc: cardGameVideo,
      thumbnailVideoPlaybackRate: 1.2,
      description: {
        "pl-PL": "Zagraj z swoimi przyjaciółmi, gra bazowana na popularnej grze UNO. ",
        "en-US": "Play a card game with your friends, game based on popular UNO card game",
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
      title: { "pl-PL": "Ping-Pong", "en-US":"Ping-Pong" },
      thumbnailVideoPlaybackRate: 2,
      thumbnailVideoSrc: pingPongVideo,
      cta: { "pl-PL": "Zagraj już teraz!", "en-US":"Play now!" },
      description: {
        "pl-PL": "Prosta gra pong! Graj z komputerem, albo ze znajomymi! ",
        "en-US":  "A simple ping pong game. Play against the computer or friends!" ,
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
      title: { "pl-PL": "Koło fortuny [WIP]",'en-US':"Wheel of fortune [WIP]" },
      cta: { "pl-PL": "Kliknij tutaj aby zagrać!" },
      thumbnailVideoPlaybackRate: 1.2,
      thumbnailVideoSrc:placeholderVideo,
      description: {
        "pl-PL": "Zagraj z swoimi przyjaciółmi, gra bazowana na sławnym teleturnieju.",
        "en-US":   "Play with your friends, game based on a fameous gameshow",
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
      title: { "pl-PL": "Kółko i krzyżyk [WIP]", "en-US":"Tic-tac-toe [WIP]" },
      cta: { "pl-PL": "Kliknij tutaj aby zagrać!", "en-US":"Click here to play!" },
      thumbnailVideoPlaybackRate: 1.2,
      thumbnailVideoSrc:placeholderVideo,
      description: {
        "pl-PL": "Klasyk gier podwórkowych! Graj z algorytmem na różnym poziomie. ",
        "en-US": "A childhood classic! Play with an algorithm at different levels."
      },
      /*repositoryUrl: "https://github.com/robertplawski/kolo-fortuny",
      demoUrl: "https://play-no-card-game.robertplawski.pl/",*/
      tags: [<SiReact size={20} key={0} />],

      workInProgress: true,
      timestamp: 1734614417000,
    },
    {
      title: { "pl-PL": "Kajet [WIP]", "en-US":"Kajet (notebook) [WIP]" },
      cta: { "pl-PL": "Kliknij tutaj aby zagrać!" },
      thumbnailVideoPlaybackRate: 1.2,
      description: {
        "pl-PL": "Ta aplikacja zwiększy twoją produktywność. Aplikacja pozwala na tworzenie notatek, czy list.  ",
        "en-US":"This application will increase your productivity. Application allows to create notes or lists."
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



  const localeCompare = (a,b) => a.localeCompare(b,language);

  const FILTERS = {
    'all': ()=>true,
    'finished': (project)=>!project.workInProgress,
    'work-in-progress': (project)=>project.workInProgress
  }
  
  const SORTERS = {
    'default': (a,b) => 0,
    'latest': (a, b) => a.timestamp < b.timestamp ? 1 :  -1 ,
    'oldest' : (a, b) => a.timestamp > b.timestamp ? 1 :  -1 ,
    'alphabetically-ascending':  (a, b) =>  localeCompare(a.title[language] || a.title[DEFAULT_LANGUAGE] ,b.title[language] || b.title[DEFAULT_LANGUAGE]),
    'alphabetically-descending' : (a, b) => localeCompare(b.title[language] || b.title[DEFAULT_LANGUAGE],a.title[language] || a.title[DEFAULT_LANGUAGE]) ,
  }
  return (
    <div>
      
      <div className="projects-header">
        <FaFilter />
        <b>{l`filter-and-sorting`}</b>
        <div className="full-flex"></div>
        <select onChange={({target})=>setSort(target.value)}>
          <option value='default'>{l`default`}</option>
          <option value='latest'>{l`latest`}</option>
          <option value='oldest'>{l`oldest`}</option>
          <option value='alphabetically-ascending'>{l`alphabetically-ascending`}</option>
          <option value='alphabetically-descending'>{l`alphabetically-descending`}</option>
        </select>

        <select onChange={({target})=>setFilter(target.value)}>
          <option value='all'>{l`all`}</option>
          <option value='finished'>{l`finished`}</option>
          <option value='work-in-progress'>{l`work-in-progress`}</option>
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
          {l`more-projects-at`} <b>https://robertplawski.github.io/</b>
        </a>
      </div>
    </div>
  );
}
