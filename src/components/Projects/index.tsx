import React from "react";
import { personalProjects } from "../../data/constants";
import Card from "./Card";
import styles from "./index.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      {personalProjects.map((project) => (
        <React.Fragment key={project.title}>
          <Card project={project}></Card>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
