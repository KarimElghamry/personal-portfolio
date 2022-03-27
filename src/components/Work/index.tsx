import React from "react";
import { workExperience } from "../../data/workExperience";
import styles from "./index.module.css";
import JobEntry from "./JobEntry";

const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.title}>Brief Introduction</div>
        <p>
          My name is Karim Elghamry. I'm a software engineer with 6+ years of
          experience and a computer engineering bachelor's degree graduate from
          Nile University. Coupled with my excellent academic performance, I
          have worked on multiple personal open source projects using different
          technologies in the frontend and backend fields, such as Flutter,
          React.Js and others.
          <br />
          <br />
          Moreover, I have worked in the blockchain and machine learning fields
          for 2 years and I am deeply interested in them. Armed with a
          competitive athlete spirit, I am willing to be an added value to the
          open source community.
        </p>
      </div>

      <div className={styles.column}>
        <div className={styles.title}>Work Experience</div>
        {workExperience.map((job) => (
          <React.Fragment key={job.company + job.position}>
            <JobEntry job={job}></JobEntry>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Work;
