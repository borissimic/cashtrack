import { NavItem } from "models/generic.model";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Navigation = ({ className = "", items }: Props) => {
  const content = items.map(({ name, path }) => (
    <NavLink key={name} to={path}>
      {name}
    </NavLink>
  ));

  return <nav className={`navigation ${className}`}>{content} </nav>;
};

type Props = {
  className?: string;
  items: NavItem[];
};

export default Navigation;
