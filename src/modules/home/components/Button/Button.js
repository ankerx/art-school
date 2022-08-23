import { Link } from "react-router-dom";
import "./button.css";

export const Button = ({ text, className = "" }) => {
  return <button className={`btn ${className}`}>{text}</button>;
};

export const MenuButton = ({ text, path }) => {
  return (
    <button>
      <Link id="link" to={path}>
        {text}
      </Link>
    </button>
  );
};
