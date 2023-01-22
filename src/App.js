import "./App.css";
import MainView from "./sections/mainView/MainView";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "./assets/logo.png";

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
    <div className="App">
      <MainView />
      {/*TODO: Move to separate component (in src/sections/Gallery ) and import here  */}
      <Slider {...settings}>
        <div>
          <h3>
            <img src={image} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            2
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title={"Muppets video"}
            ></iframe>
          </h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default App;
