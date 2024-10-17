import style from "./menuIcon.module.scss";

export const MenuIcon = ({ onClick, isOpen }) => {
  return (
    <button className={style.menuButton} onClick={onClick}>
      <div className={`${style.menuIcon} ${isOpen ? style.open : ""}`}></div>
    </button>
  );
};
