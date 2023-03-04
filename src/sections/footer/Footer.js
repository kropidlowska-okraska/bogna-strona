import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>MAX MUSTERMANN</div>
        <div className={styles.subtitle}>
          <p>
            Call me: <a href="tel:+1234-567-7890">+1 234 567 890</a>
          </p>
          <p>
            Send me an email:{" "}
            <a href="mailto:max@muster.mann">max@muster.mann</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
