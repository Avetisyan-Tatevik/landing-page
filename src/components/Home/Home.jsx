import Header from "../Header/Header";
import ClientRetentionSection from "../ClientRetentionSection/ClientRetentionSection";
import TradingBull from "../../assets/Trading Bull_Landing Page (1).jpg";
import IpadScreen from "../../Svgs/IpadScreen";

import style from "./home.module.scss";

const Home = () => {
  return (
    <div className={style.mainWrapper}>
      <Header />
      <section className={style.background}>
        <img src={TradingBull} alt="Trading Bull" />
        <div className={style.absolute}>
          <ClientRetentionSection />
          <IpadScreen  className={style.ipadScreen}/>
        </div>
      </section>
    </div>
  );
};

export default Home;
