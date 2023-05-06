import styles from "./Footer.module.css";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className={styles.footer}>
      <li>
        <a href="/" className={styles.social}>
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="/" className={styles.social}>
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="/" className={styles.social}>
          <FaYoutube />
        </a>
      </li>
    </footer>
  );
}
export default Footer;
