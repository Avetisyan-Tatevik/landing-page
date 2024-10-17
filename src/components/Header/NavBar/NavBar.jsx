import NavItem from "../../../shared/NavItem/NavItem";
import { NAV_TYPES } from "../../../enum/constants";
import style from "./navBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.ulList}>
        <li>
          <NavItem href={""} content={NAV_TYPES.RESEARCH_TERMINAL} />
        </li>
        <li>
          <NavItem href={""} content={NAV_TYPES.CONTENT} />
        </li>
        <li>
          <NavItem href={""} content={NAV_TYPES.FOUNDERS} />
        </li>
        <li>
          <NavItem href={""} content={NAV_TYPES.BLOG} />
        </li>
        <li>
          <NavItem href={""} content={NAV_TYPES.FAQ} />
        </li>
        <li>
          <NavItem href={""} content={NAV_TYPES.CONTACT} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
