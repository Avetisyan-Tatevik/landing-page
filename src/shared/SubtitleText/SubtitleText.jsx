import style from "./subtitle.module.scss";

const SubtitleText = ({ content, className }) => {
  return <p className={`${style.subtitleText} ${className}`}>{content}</p>;
};

export default SubtitleText;
