import Navigation from "../navigation/Navigation";
import Heading from "../../components/Heading";

const MainView = () => {
  return (
    <>
      <div className='bg-[url("/src/assets/background_sm.jpeg")] md:bg-[url("/src/assets/mainBackgroundImage.jpg")] bg-cover bg-center bg-fixed h-screen flex flex-col justify-center relative'>
        <Navigation />
        <div className="p-4 lg:w-6/12 lg:p-20">
          <Heading>DOGGO IPSUM TITLE</Heading>
          <div className="font-lato-regular text-xl text-green-dark lg:text-2xl">
            Stop it fren fluffer borking doggo tungg sub woofer blep, you are
            doing me the shock yapper wrinkler borkdrive big ol, blep tungg doge
            clouds. Bork doing me a frighten smol borking doggo with a long
            snoot for pats puggo, blep bork. Borking doggo h*ck heckin good boys
            and girls borkdrive, extremely cuuuuuute.
          </div>
        </div>
      </div>
    </>
  );
};

export default MainView;
