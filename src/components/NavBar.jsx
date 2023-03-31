import market from "../assets/market.svg";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav>
      <div className="navBrand">
        <a href="./index">
          <img src={market} alt="Logo compañia" />
        </a>
      </div>
      <div className="navBar-nav">
        <ul className="navBarList">
          <a href="#">
            <li className="navBarItems">Home</li>
          </a>
          <a href="#">
            <li className="navBarItems">Service</li>
          </a>
          <a href="#">
            <li className="navBarItems">Catalog</li>
          </a>
          <a href="#">
            <li className="navBarItems">Us</li>
          </a>
          <a href="#">
            <li className="navBarItems">Contact</li>
          </a>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};
