import "./Project.css";
import { FaPlay, FaGithub, FaShare } from "react-icons/fa6";

export function Project({
  title = { pl: "Lorem ipsum" },
  description = { pl: "Lorem ipsum dolor sit amet consetetur adisping elit." },
  timestamp = 1,
  showFull = false,
  tags = [],
  demoLink = "",
  repositoryLink = "",
}) {
  return (
    <div
      className="project-container"
      style={showFull ? { minWidth: "100%" } : {}}
    >
      <p className="project-title">{title.pl}</p>
      <p className="project-description">{description.pl}</p>
      <div className="project-row">
        <div className="project-meta">
          {tags}
          <p>|</p>
          <p>{new Date(timestamp).toUTCString().slice(4, 16)}</p>{" "}
        </div>
        <div className="project-buttons">
          {demoLink && (
            <a href={demoLink}>
              <FaPlay size={18} />
            </a>
          )}
          {repositoryLink && (
            <a href={repositoryLink}>
              <FaGithub size={18} />
            </a>
          )}
          <FaShare size={18} />
        </div>
      </div>
    </div>
  );
}
