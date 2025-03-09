import "./Project.css";
import { useState, useRef, useEffect, useContext } from "react";
import {
  FaPlay,
  FaGithub,
  FaShare,
  FaEnvelope,
  FaBluesky,
} from "react-icons/fa6";
import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import pingPongVideo from "../../assets/projects/pingPongVideo.webm";
import Markdown from "react-markdown";
import { InternationalizationContext } from "../contexts/InternationalizationContext.jsx";
import { ModalContext } from "../contexts/ModalContext.jsx";
import { Fade } from "react-awesome-reveal";

export function Project({
  index = 0,
  id = "project",
  title = { "pl-PL": "Lorem ipsum" },
  description = {
    "pl-PL": "Lorem ipsum dolor sit amet consetetur adisping elit.",
  },
  cta = { "pl-PL": "Lorem ipsum!" },
  timestamp = 0,
  showFull = false,
  tags = [],
  customButtons = "",
  thumbnailVideoSrc,
  demoUrl = "",
  repositoryUrl = "",
  hidden = false,
  workInProgress = false,
  thumbnailVideoPlaybackRate = 3,
}) {
  // eslint-disable-next-line no-unused-vars
  const [playbackRate, setPlaybackRate] = useState(thumbnailVideoPlaybackRate);
  const videoRef = useRef(null);
  const { language, lookup: l } = useContext(InternationalizationContext);
  const { openModal } = useContext(ModalContext);

  const spawnButtonRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);
  if (hidden) {
    return <></>;
  }
  return (
    <Fade
      direction="up"
      className={`project-container ${
        workInProgress ? "work-in-progress" : ""
      }`}
      delay={(index + 1) * 150}
      id={id}
      style={showFull ? { minWidth: "100%" } : {}}
    >
      <div>
        <Markdown className="project-title">{title[language]}</Markdown>
        <Markdown className="project-description">
          {description[language]}
        </Markdown>
        {thumbnailVideoSrc && (
          <a href={demoUrl ? demoUrl : ""}>
            <div className="project-thumbnail-container">
              <video
                src={thumbnailVideoSrc}
                autoPlay={true}
                muted={true}
                controls={false}
                loop={true}
                ref={videoRef}
              />
              <div className="project-thumbnail-overlay">
                <Markdown>{cta[language]}</Markdown>
              </div>
            </div>
          </a>
        )}
        <div className="project-row">
          <div className="project-meta">
            {tags}
            <p>
              {timestamp
                ? "|" + new Date(timestamp).toUTCString().slice(4, 16)
                : ""}
            </p>{" "}
          </div>
          <div className="project-separator"></div>
          <div className="project-buttons">
            {customButtons && customButtons}
            {demoUrl && (
              <a aria-label={title[language] + " live demo"} href={demoUrl}>
                <FaPlay size={18} />
              </a>
            )}
            {repositoryUrl && (
              <a
                aria-label={title[language] + " repository"}
                href={repositoryUrl}
              >
                <FaGithub size={18} />
              </a>
            )}
            <button
              ref={spawnButtonRef}
              className="no-appearance"
              aria-label="Share"
              onClick={() =>
                openModal(
                  <>
                    <h2>
                      <b>{l`share`}</b>
                    </h2>
                    <div className="contact-me">
                      <RedditShareButton url={`${location.origin}/#${id}`}>
                        Reddit
                      </RedditShareButton>
                      <a
                        href="mailto:dev@robertplawski.pl"
                        className="basic-row"
                        aria-label="Email contact"
                      >
                        <FaEnvelope size={24} />
                        <p>DEMO </p>
                      </a>
                      <a
                        href="https://github.com/robertplawski"
                        className="basic-row"
                        aria-label="Github account"
                      >
                        <FaGithub size={24} />
                        <p>GITHUB</p>
                      </a>
                      <a
                        href="https://bsky.app/profile/robertplawski.pl"
                        aria-label="Bluesky account"
                        className="basic-row"
                      >
                        <FaBluesky size={24} />
                        <p>Bluesky</p>
                      </a>
                    </div>
                  </>,
                  spawnButtonRef.current
                )
              }
            >
              <FaShare size={18} />
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
}
