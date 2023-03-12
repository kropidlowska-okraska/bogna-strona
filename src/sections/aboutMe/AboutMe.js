import styles from "./AboutMe.module.css";

import image from "../../assets/dogboss.jpeg";

const AboutMe = () => (
  <div className={styles.container}>
    <div className={styles.title}>ABOUT ME</div>
    <div className={styles.content}>
      <img src={image} alt="Boss" className={styles.image} />
      <div className={styles.text}>
        <div className={styles.paragraph}>
          Doggo ipsum aqua doggo sub woofer very hand that feed shibe h*ck what
          a nice floof heckin, borkdrive porgo tungg shoober. Fat boi doge big
          ol pupper doge, shibe extremely cuuuuuute. He made many woofs doge
          wrinkler smol borking doggo with a long snoot for pats doing me a
          frighten, corgo doggo heck.
        </div>
        <div className={styles.paragraph}>
          Shooberino very hand that feed shibe wow such tempt ruff big ol
          heckin, you are doin me a concern boofers very taste wow. The
          neighborhood pupper shoob clouds fat boi borkdrive, doggo much ruin
          diet smol borking doggo with a long snoot for pats. long bois woofer
          bork. I am bekom fat very taste wow most angery pupper I have ever
          seen doing me a frighten, tungg stop it fren.
        </div>
        <div className={styles.paragraph}>
          Blep long doggo what a nice floof bork heckin good boys and girls,
          long doggo heckin angery woofer. Shoober extremely cuuuuuute borking
          doggo thicc, wrinkler borking doggo, aqua doggo pupperino. Heckin good
          boys and girls puggo porgo noodle horse very jealous pupper, wrinkler
          big ol pupper heckin angery woofer.
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
