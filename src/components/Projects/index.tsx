import React from "react";
import { personalProjects } from "../../data";
import Card from "./Card";
import styles from "./index.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        {personalProjects.map((val) => (
          <React.Fragment key={val.project.title}>
            <Card {...val}></Card>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Projects;
