import styles from "./index.module.css";

interface HamburgerIconProps {
  onClick?: () => void;
  isActive: boolean;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = (
  props: HamburgerIconProps
) => {
  return (
    <div
      className={styles.container}
      onClick={() => (props.onClick ? props.onClick() : undefined)}
    >
      {new Array(3).fill(0).map((_, index) => (
        <div
          key={index}
          className={`${styles.stripe} ${
            props.isActive ? styles["stripe-active"] : ""
          }`}
        ></div>
      ))}
    </div>
  );
};

export default HamburgerIcon;
