import SvgIcon from "../../../Svgs/LogoSvg";
import SubtitleText from "../../../shared/SubtitleText/SubtitleText";

import style from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={style.logoWrapper}>
      <SvgIcon />
      <SubtitleText content={"TRADING BULL"} className={style.subtitleText} />
    </div>
  );
};

export default Logo;
