import BlackBgPhone from "../../Svgs/BlackBgPhone";
import SubtitleText from "../../shared/SubtitleText/SubtitleText";
import { SUBTITLES } from "../../enum/constants";

import style from "./attractNewBusinessSection.module.scss";

const AttractNewBusinessSection = () => {
  return (
    <section className={style.wrapper}>
      <BlackBgPhone className={style.blackBgImage} />
      <SubtitleText
        content={SUBTITLES.ATTRACT_NEW_BUSINESS}
        className={style.subTitle}
      />
    </section>
  );
};

export default AttractNewBusinessSection;
