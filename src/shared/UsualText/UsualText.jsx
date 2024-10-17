import style from "./usualText.module.scss";

const UsualText = ({ content, className }) => {
  return <p className={`${style.usualText} ${className}`}>{content}</p>;
};

export default UsualText;
