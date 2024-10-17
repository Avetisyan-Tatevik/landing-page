import Header from "../Header/Header";
import IpadScreen from "../../Svgs/IpadScreen";
import BookDemoBtn from "../../shared/BookDemoBtn/BookDemoBtn";
import TradingBull from "../../assets/Trading Bull_Landing Page (1).jpg";
import ClientRetentionSection from "../ClientRetentionSection/ClientRetentionSection";
import AttractNewBusinessSection from "../AttractNewBusinessSection/AttractNewBusinessSection";

import style from "./home.module.scss";

const Home = () => {
  return (
    <div className={style.mainWrapper}>
      <Header />
      <section className={style.background}>
        <img src={TradingBull} alt="Trading Bull" className={style.bgImage} />
        <div className={style.absolute}>
          <ClientRetentionSection />
          <IpadScreen className={style.ipadScreen} />
          <BookDemoBtn />
        </div>
      </section>
      <AttractNewBusinessSection />
    </div>
  );
};

export default Home;
