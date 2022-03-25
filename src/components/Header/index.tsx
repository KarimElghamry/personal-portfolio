import React, { useLayoutEffect, useState } from "react";
import { images } from "../../assets";
import Button from "./Button";
import HamburgerIcon from "./HamburgerIcon";
import styles from "./index.module.css";

const WINDOW_WIDTH_THRESHOLD = 800;

interface HeaderProps {
  routes: string[];
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  // states
  const [isCompactView, setIsCompactView] = useState<boolean>(
    window.innerWidth < WINDOW_WIDTH_THRESHOLD
  );
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // handlers
  const handleHamburgerClick = () => setIsExpanded((prev) => !prev);
  const handleRouteClick = () => setIsExpanded(false);

  // side effect to get window width
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth < WINDOW_WIDTH_THRESHOLD);
      if (window.innerWidth >= WINDOW_WIDTH_THRESHOLD) setIsExpanded(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCompactView]);

  return (
    <>
      <div className={styles.container}>
        <img src={images.logo} alt="SlimXV logo" className={styles.logo}></img>

        {/* render list according to screen size */}
        <div
          className={`${styles["nav-container"]} ${
            isCompactView ? styles["compact-view"] : ""
          } ${isExpanded ? styles["compact-view-active"] : ""}`}
        >
          {props.routes.map((val) => (
            <React.Fragment key={val}>
              <Button label={val} onClick={handleRouteClick}></Button>
            </React.Fragment>
          ))}
        </div>

        {isCompactView ? (
          <HamburgerIcon onClick={handleHamburgerClick}></HamburgerIcon>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;
