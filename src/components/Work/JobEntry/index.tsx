import Job from "../../../models/Job";
import styles from "./index.module.css";

interface JobEntryProps {
  job: Job;
}

const dateFormatOptions: { day: "numeric"; month: "numeric"; year: "numeric" } =
  {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

const JobEntry: React.FC<JobEntryProps> = (props: JobEntryProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.date}>{`${props.job.from.toLocaleDateString(
        undefined,
        dateFormatOptions
      )} - ${props.job.to.toLocaleDateString(
        undefined,
        dateFormatOptions
      )}`}</div>
      <div>
        <img src={props.job.companyLogo} alt={props.job.company}></img>
        <span className={styles.company}>{props.job.company}</span>
        <span className={styles.location}>{props.job.location}</span>
      </div>
      <div className={styles.position}>{props.job.position}</div>
    </div>
  );
};

export default JobEntry;
