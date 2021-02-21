import React from "react";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flashes from a very large icon down to a properly sized one
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent Font Awesome from adding its CSS since we already did it manually above
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
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
