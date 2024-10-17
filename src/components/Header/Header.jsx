import Logo from "./Logo/Logo";
import { useState, useEffect } from "react";
import SvgIcon from "../../Svgs/LogoSvg";
import NavBar from "./NavBar/NavBar";
import { MenuIcon } from "../../shared/MenuIcon/MenuIcon";
import useIsMobile from "../../customHooks/useIsMobile";
import RequestDemoBtn from "../../shared/RequestDemoBtn/RequestDemoBtn";
import style from "./header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile(768);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);
  return (
    <header>
      {!isMobile && (
        <section className={style.headerWrapper}>
          <Logo />
          <NavBar />
          <RequestDemoBtn />
        </section>
      )}
      {isMobile && (
        <section className={style.headerWrapper}>
          <SvgIcon />
          <RequestDemoBtn />
          <MenuIcon onClick={toggleMenu} isOpen={menuOpen} />
        </section>
      )}
      {isMobile && menuOpen && <NavBar />}
    </header>
  );
};

export default Header;
