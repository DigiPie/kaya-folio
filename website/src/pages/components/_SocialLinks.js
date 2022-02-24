import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";

import socialLinks from "../../data/_SocialLinks";

function SocialLink({ faIcon, alt, url }) {
  return (
    <li>
      <a className="button button--outline button--success" href={url}>
        <FontAwesomeIcon alt={alt} title={alt} icon={faIcon} size="1x" /> {alt}
      </a>
    </li>
  );
}

function SocialLinks() {
  return (
    <div className={styles.socialLinkListContainer}>
      <ul className={styles.socialLinkList}>
        {socialLinks.map((props, idx) => (
          <SocialLink key={idx} {...props} />
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
