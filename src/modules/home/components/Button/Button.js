import { Link } from "react-router-dom";
import "./button.scss";

export const Button = ({ text, className = "", onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {text}
    </button>
  );
};

export const MenuLink = ({ text, path }) => {
  return (
    <Link id="link" to={path}>
      <span className="menu-link">{text}</span>
    </Link>
  );
};
