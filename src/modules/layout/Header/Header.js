import logo from "../../home/images/logo-SA.png";
import { MenuButton } from "../../home/components/Button/Button";
import "./header.scss";
import { LinkComponent } from "../LinkComponent/LinkComponent";
import { routes } from "./routes";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="navbar">
        <ul className="menu-list">
          {routes.map((route) => (
            <LinkComponent
              key={route.name}
              routeName={route.name}
              path={route.url}
            />
          ))}
          <li className="menu-list-item">
            <MenuButton text="Apply now" path="/apply" />
          </li>
        </ul>
        <button className="menu-btn">
          <span className="menu-bars"></span>
        </button>
      </nav>
    </header>
  );
};
