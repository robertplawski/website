import "./Project.css";
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaGithub, FaShare } from "react-icons/fa6";
import Markdown from "react-markdown";
export function Project({
  title = { pl: "Lorem ipsum" },
  description = { pl: "Lorem ipsum dolor sit amet consetetur adisping elit." },
  cta = { pl: "Lorem ipsum!" },
  timestamp = 1,
  showFull = false,
  tags = [],
  customButtons = "",
  thumbnailVideoSrc,
  demoUrl = "",
  repositoryUrl = "",
  thumbnailVideoPlaybackRate = 3,
}) {
  // eslint-disable-next-line no-unused-vars
  const [playbackRate, setPlaybackRate] = useState(thumbnailVideoPlaybackRate);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div
      className="project-container"
      style={showFull ? { minWidth: "100%" } : {}}
    >
      <Markdown className="project-title">{title.pl}</Markdown>
      <Markdown className="project-description">{description.pl}</Markdown>
      {thumbnailVideoSrc && demoUrl && (
        <a href={demoUrl}>
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
              <Markdown>{cta.pl}</Markdown>
            </div>
          </div>
        </a>
      )}
      <div className="project-row">
        <div className="project-meta">
          {tags}
          <p>|</p>
          <p>{new Date(timestamp).toUTCString().slice(4, 16)}</p>{" "}
        </div>
        <div className="project-separator"></div>
        <div className="project-buttons">
          {customButtons && customButtons}
          {demoUrl && (
            <a href={demoUrl}>
              <FaPlay size={18} />
            </a>
          )}
          {repositoryUrl && (
            <a href={repositoryUrl}>
              <FaGithub size={18} />
            </a>
          )}
          <a>
            <FaShare size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
