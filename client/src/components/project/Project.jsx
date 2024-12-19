import "./Project.css";
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaGithub, FaShare } from "react-icons/fa6";
import pingPongVideo from "../../assets/projects/pingPongVideo.webm";
import Markdown from "react-markdown";
export function Project({
  title = { pl: "Lorem ipsum" },
  description = { pl: "Lorem ipsum dolor sit amet consetetur adisping elit." },
  cta = { pl: "Lorem ipsum!" },
  timestamp = 0,
  showFull = false,
  tags = [],
  customButtons = "",
  thumbnailVideoSrc,
  demoUrl = "",
  repositoryUrl = "",
  hidden = false,
  workInProgress = false,
  thumbnailVideoPlaybackRate = 3
}) {
  // eslint-disable-next-line no-unused-vars
  const [playbackRate, setPlaybackRate] = useState(thumbnailVideoPlaybackRate);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);
  if(hidden){return <></>;}
  return (
    <div
      className={`project-container ${
        workInProgress ? "work-in-progress" : ""
      }`}
      style={showFull ? { minWidth: "100%" } : {}}
    >
      <Markdown className="project-title">{title.pl}</Markdown>
      <Markdown className="project-description">{description.pl}</Markdown>
      {(thumbnailVideoSrc) && (
        <a href={demoUrl ? demoUrl : ""}>
          <div className="project-thumbnail-container">
              <video
              src={ thumbnailVideoSrc }
              autoPlay={true}
              muted={true}
              controls={false}
              loop={true}
              ref={videoRef}
            />
            <div className="project-thumbnail-overlay">
              <Markdown>{cta.pl}</Markdown>
            </div>
          </div>
        </a>
      )}
      <div className="project-row">
        <div className="project-meta">
          {tags}
          <p>{timestamp ? '|'+(new Date(timestamp).toUTCString().slice(4, 16)) : ''}</p>{" "}
        </div>
        <div className="project-separator"></div>
        <div className="project-buttons">
          {customButtons && customButtons}
          {demoUrl && (
            <a aria-label={title.pl + " live demo"} href={demoUrl}>
              <FaPlay size={18} />
            </a>
          )}
          {repositoryUrl && (
            <a aria-label={title.pl + " repository"} href={repositoryUrl}>
              <FaGithub size={18} />
            </a>
          )}
          <div>
            <FaShare size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
