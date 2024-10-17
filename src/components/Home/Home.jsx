import style from "./home.module.scss";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className={style.mainWrapper}>
      <Header />
    </div>
  );
};

export default Home;
