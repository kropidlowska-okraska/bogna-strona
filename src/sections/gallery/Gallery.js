import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Gallery.module.css";
import logo from "../../assets/logo.png";
import slider_1 from "../../assets/slider_1.jpeg";
import slider_2 from "../../assets/slider_2.jpeg";
import slider_3 from "../../assets/slider_3.jpeg";

// TODO: Check with JavaScript if viewport is mobile or desktop
const isMobile = false;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: isMobile ? 1 : 3,
  slidesToScroll: 1,
};

const Gallery = () => (
  <Slider {...settings}>
    <div className={styles.container}>
      <img src={logo} alt="" className="aspect-square object-cover" />
    </div>
    <div className={styles.container}>
      <iframe
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        title={"Muppets video"}
        className="aspect-square"
      ></iframe>
    </div>
    <div className={styles.container}>
      <img src={slider_1} alt="" className="aspect-square object-cover" />
    </div>
    <div className={styles.container}>
      <img src={slider_2} alt="" className="aspect-square object-cover" />
    </div>
    <div className={styles.container}>
      <img src={slider_3} alt="" className="aspect-square object-cover" />
    </div>
  </Slider>
);

export default Gallery;
