import React from "react";
import { images } from "../../assets";
import { openInNewTab } from "../../helpers";
import styles from "./index.module.css";

const socialNetworks = [
  {
    icon: images.companies.facebook,
    url: "https://www.facebook.com/kimoelghamry/",
  },
  {
    icon: images.companies.github,
    url: "https://github.com/KarimElghamry/",
  },
  {
    icon: images.companies.linkedin,
    url: "https://www.linkedin.com/in/karim-elghamry-0ab037188/",
  },
  {
    icon: images.companies.gmail,
    url: "mailto:karimelghamry@gmail.com",
  },
];

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className="flex-row">
        {socialNetworks.map((val, index) => (
          <React.Fragment key={val.url}>
            <img
              src={val.icon}
              alt={val.url}
              onClick={() => openInNewTab(val.url)}
            ></img>
          </React.Fragment>
        ))}
      </div>
      <div>© {new Date(Date.now()).getFullYear()} Karim Elghamry</div>
    </div>
  );
};

export default Contact;
