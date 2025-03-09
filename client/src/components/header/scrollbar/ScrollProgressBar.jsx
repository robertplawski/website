import { useEffect, useState, useCallback } from "react";
import "./ScrollProgressBar.css";
export default function ScrollProgressBar() {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = useCallback(() => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  }, [setScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="scroll-progress-bar">
      <div className="scroll-progress" style={{ width: `${scrollTop}%` }}></div>
    </div>
  );
}
