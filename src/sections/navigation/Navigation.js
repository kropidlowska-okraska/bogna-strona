import image from "../../assets/logo.png";
import hamburgerMenu from "../../assets/hamburger-menu.svg";
import { useRef } from "react";

const Navigation = () => {
  const navRef = useRef(null);

  const onClick = () => {
    const navClasses = navRef.current.classList;

    navClasses.contains("max-md:hidden")
      ? navClasses.remove("max-md:hidden")
      : navClasses.add("max-md:hidden");
  };

  return (
    <header
      id="top"
      className="fixed top-0 z-10 flex justify-between items-center w-full bg-green-light px-2 py-2"
    >
      <button onClick={onClick}>
        <img
          src={hamburgerMenu}
          alt="Otworz menu"
          className="w-10 h-10 md:hidden"
        />
      </button>
      <img src={image} alt={"Logo"} className="w-10 h-10" />

      <nav
        ref={navRef}
        className="max-md:hidden absolute left-0 top-14 min-w-[50%] flex flex-col bg-green-light text-white p-2 rounded-md"
      >
        <ul>
          <li className="py-1 hover:bg-green-dark hover:rounded-md px-1">
            Start
          </li>
          <li className="py-1 hover:bg-green-dark hover:rounded-md px-1">
            O mnie
          </li>
          <li className="py-1 hover:bg-green-dark hover:rounded-md px-1">
            Galeria
          </li>
          <li className="py-1 hover:bg-green-dark hover:rounded-md px-1">
            Wspolprace
          </li>
          <li className="py-1 hover:bg-green-dark hover:rounded-md px-1">
            Konatakt
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
