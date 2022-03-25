import { images } from "../../../assets";
import { openInNewTab } from "../../../helpers";
import Project from "../../../models/Project";
import styles from "./index.module.css";

interface CardProps {
  project: Project;
  color: string;
  frameworkLogo: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: props.color }}
      onClick={() => openInNewTab(props.project.url)}
    >
      <div className={styles.title}>
        <img src={props.frameworkLogo} alt=""></img>
        {props.project.title}
      </div>
      <div className={styles.link}>View Project &#8594;</div>
      <div className={styles.description}>{props.project.description}</div>

      <img
        src={props.project.image}
        alt={props.project.title}
        className={styles.preview}
      ></img>
    </div>
  );
};

export default Card;
