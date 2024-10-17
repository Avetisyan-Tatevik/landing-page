import SubtitleText from "../../shared/SubtitleText/SubtitleText";
import ProgressBarSvg from "../../Svgs/ProgressBarSvg";
import UsualText from "../../shared/UsualText/UsualText";
import { SUBTITLES, TEXT } from "../../enum/constants";
import style from "./clientRetentionSection.module.scss";

const ClientRetentionSection = () => {
  return (
    <section className={style.wrapper}>
      <section className={style.subtitleWrapper}>
        <SubtitleText
          content={SUBTITLES.CLIENT_RETENTION1}
          className={style.subtitleText}
        />
        <ProgressBarSvg className={style.left} />
        <SubtitleText
          content={SUBTITLES.CLIENT_RETENTION2}
          className={style.subtitleText}
        />
        <ProgressBarSvg className={style.right} />
      </section>
      <section className={style.textWrapper}>
        <UsualText content={TEXT.REPORTS} />
      </section>
    </section>
  );
};

export default ClientRetentionSection;
