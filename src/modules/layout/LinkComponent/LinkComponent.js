import { Link } from "react-router-dom";

export const LinkComponent = ({ routeName, path }) => {
  return (
    <li className="menu-list-item" key={routeName}>
      <Link to={path}>{routeName}</Link>
    </li>
  );
};
