import { Link } from "react-router-dom";
import "./footer.scss";

const routes = ["Terms", "Privacy policy", "Help & Support"];

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="footer-info">
          © Simple Art,Inc.2021 <br />
          All rights reserved
        </p>
      </div>
      <nav>
        <ul className="footer-menu-list">
          {routes.map((route) => (
            <li className="footer-menu-list-item" key={route}>
              <Link to="/">{route}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
