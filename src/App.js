import MainView from "./sections/mainView/MainView";
import AboutMe from "./sections/aboutMe/AboutMe";
import Cooperation from "./sections/cooperation/Cooperation";
import Gallery from "./sections/gallery/Gallery";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <div>
      <MainView />
      <AboutMe />
      <Gallery />
      <Cooperation />
      <Footer />
    </div>
  );
}

export default App;
