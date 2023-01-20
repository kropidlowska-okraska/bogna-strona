import styles from "./MainView.module.css";
import image from "../../assets/logo.png";

const MainView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={image} alt={"Logo"} />
      </div>
      <nav className={styles.navigation}>
        <div>DOGGO</div>
        <div>IPSUM</div>
        <div>DOGGO IPSUM</div>
        <div>D I</div>
        <div>DOGGOIPSUM</div>
      </nav>
      <div className={styles.content}>
        <h1 className={styles.title}>DOGGO IPSUM</h1>
        <div className={styles.subtitle}>
          <p>
            Stop it fren fluffer borking doggo tungg sub woofer blep, you are
            doing me the shock yapper wrinkler borkdrive big ol, blep tungg doge
            clouds. Bork doing me a frighten smol borking doggo with a long
            snoot for pats puggo, blep bork. Borking doggo h*ck heckin good boys
            and girls borkdrive, extremely cuuuuuute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainView;
