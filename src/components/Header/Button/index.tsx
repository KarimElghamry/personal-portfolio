import styles from "./index.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div
      className={styles.container}
      onClick={() => (props.onClick ? props.onClick() : undefined)}
    >
      {props.label}
    </div>
  );
};

export default Button;
