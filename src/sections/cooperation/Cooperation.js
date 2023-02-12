import styles from "./Cooperation.module.css";
import logo1 from "../../assets/logos/logo1.jpeg";
import logo2 from "../../assets/logos/logo2.jpeg";
import logo3 from "../../assets/logos/logo3.jpeg";
import logo4 from "../../assets/logos/logo4.jpeg";

const Cooperation = () => (
  <div className={styles.container}>
    <div className={styles.title}>COOPERATION</div>
    <div className={styles.logos}>
      <a href="">
        <img src={logo1} alt="Logo 1" className={styles.image} />
      </a>
      <a href="">
        <img src={logo2} alt="Logo 2" className={styles.image} />
      </a>
      <a href="">
        <img src={logo3} alt="Logo 3" className={styles.image} />
      </a>
      <a href="">
        <img src={logo4} alt="Logo 4" className={styles.image} />
      </a>
    </div>
  </div>
);

export default Cooperation;
