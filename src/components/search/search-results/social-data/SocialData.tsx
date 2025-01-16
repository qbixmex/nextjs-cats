import { MapPinIcon, LinkIcon } from "lucide-react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import styles from "./SocialData.module.css";

const SocialData = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.column}>
        <div className={styles.row}>
          <MapPinIcon className={styles.icon} />
          <p className={styles.data}>Los Angeles</p>
        </div>
        <div className={styles.row}>
          <LinkIcon className={styles.icon} />
          <p className={styles.data}>
            <a
              href="https://blog.com"
              className={styles.link}
              rel="noreferrer"
              target="_blank"
            >
              Visit Blog
            </a>
          </p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.row}>
          <FaXTwitter className={styles.icon} />
          <p className={styles.data}>
            <a
              href="https://x.com/some-user"
              className={styles.link}
              rel="noreferrer"
              target="_blank"
            >x-twitter</a>
          </p>
        </div>
        <div className={styles.row}>
          <FaGithub className={styles.icon} />
          <p className={styles.data}>
            <a
              href="https://x.com/some-user"
              className={styles.link}
              rel="noreferrer"
              target="_blank"
            >Github</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialData;