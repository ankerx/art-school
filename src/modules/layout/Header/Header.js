import { Link, useLocation } from "react-router-dom";

import { MenuLink } from "../../home/components/Button/Button";
import { routes } from "./routes";
import { LinkComponent } from "../LinkComponent/LinkComponent";

import logo from "../../home/images/logo-SA.png";
import "./header.scss";

export const Header = () => {
  const location = useLocation();
  const isApplyPage = location.pathname === "/apply";
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>{" "}
      <nav className="navbar">
        {!isApplyPage ? (
          <>
            <ul className="menu-list">
              {routes.map((route) => (
                <LinkComponent
                  key={route.name}
                  routeName={route.name}
                  path={route.url}
                />
              ))}
              <li className="menu-list-item">
                <MenuLink text="Apply now" path="/apply" />
              </li>
            </ul>
            <button className="menu-btn">
              <span className="menu-bars"></span>
            </button>
          </>
        ) : (
          <Link to="/">
            <span className="menu-back-link"> Back </span>
          </Link>
        )}
      </nav>
    </header>
  );
};
