import "./mainView.css";
import image from "../../assets/logo.png";

const MainView = () => {
  return (
    <div className="container">
      <div className="logoContainer">
        <div className="logo">
          {" "}
          <img src={image} />{" "}
        </div>
      </div>
      <nav class="navigation">
        <div>DOGGO</div>
        <div>IPSUM</div>
        <div>DOGGO IPSUM</div>
        <div>D I</div>
        <div>DOGGOIPSUM</div>
      </nav>
      <div id="title" className="title">
        DOGGO IPSUM
      </div>
      <div id="subtitle" className="subtitle">
        <p>
          Stop it fren fluffer borking doggo tungg sub woofer blep, you are
          doing me the shock yapper wrinkler borkdrive big ol, blep tungg doge
          clouds. Bork doing me a frighten smol borking doggo with a long snoot
          for pats puggo, blep bork. Borking doggo h*ck heckin good boys and
          girls borkdrive, extremely cuuuuuute. Sub woofer noodle horse corgo
          tungg very hand that feed shibe very taste wow, what a nice floof
          shooberino doggo I am bekom fat. Long woofer maximum borkdrive clouds
          adorable doggo puggorino, mlem pupper ur givin me a spook. Long water
          shoob he made many woofs heck, aqua doggo.
        </p>
      </div>
    </div>
  );
};

export default MainView;
