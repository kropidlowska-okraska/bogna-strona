import MainView from "./sections/mainView/MainView";
import Slider from "react-slick";
import styles from "./App.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./assets/logo.png";
import slider_1 from "./assets/slider_1.jpeg";
import slider_2 from "./assets/slider_2.jpeg";
import slider_3 from "./assets/slider_3.jpeg";

// TODO: Check with JavaScript if viewport is mobile or desktop
const isMobile = false;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: isMobile ? 1 : 3,
  slidesToScroll: 1,
};

function App() {
  return (
    <div>
      <MainView />
      {/*TODO: Move to separate component (in src/sections/Gallery ) and import here  */}
      <Slider {...settings}>
        <img src={logo} alt="" className={styles.slider} />
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title={"Muppets video"}
          className={styles.slider}
        ></iframe>
        <img src={slider_1} alt="" className={styles.slider} />
        <img src={slider_2} alt="" className={styles.slider} />
        <img src={slider_3} alt="" className={styles.slider} />
      </Slider>
    </div>
  );
}

export default App;
