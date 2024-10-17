import style from "./navItem.module.scss";

const NavItem = ({ content, className, href }) => {
  return (
    <a href={href} className={`${style.navItem} ${className}`}>
      {content}
    </a>
  );
};

export default NavItem;
