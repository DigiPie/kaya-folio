import React from "react";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";

import socialLinks from "../../data/_SocialLinks";

function SocialLink({ faIcon, alt, url }) {
  return (
    <div>
      <a href={url} className="text-primary-900 hover:text-primary-800">
        <FontAwesomeIcon alt={alt} title={alt} icon={faIcon} size="2x" />
      </a>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <style type="text/css">{dom.css()}</style>
      {socialLinks.map((props, idx) => (
        <SocialLink key={idx} {...props} />
      ))}
    </div>
  );
}

export default SocialLinks;
