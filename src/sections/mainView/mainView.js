import "./mainView.css";
import image from "../../assets/logo.png";

const MainView = () => {
  return (
    <div className="container">
      <div className="logoContainer">
        <div className="logo">
          {" "}
          <img src={image} alt="" />{" "}
        </div>
      </div>
      <div className="title">Śmieszne Wesołe Ptaszki</div>
      <div className="subtitle">Sikorka odlatuje z budki lęgowej.</div>
    </div>
  );
};

export default MainView;
