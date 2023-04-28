import { Route, Routes } from "react-router-dom";
import Banner from "../components/Banner";
import BannerTwo from "../components/BannerTwo";
import BlockTitle from "../components/BlockTitle";
import FeeContainer from "../components/FeeContainer";
import MultyCarousel from "../components/MultyCarousel";

function Main(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={[
          <Banner auth={props.auth} toggleSearch={props.toggleSearch} />,
          <BlockTitle title="Почему именно мы" />,
          <MultyCarousel />,
          <BannerTwo />,
          <BlockTitle title="Наши тарифы" />,
          <FeeContainer />,
        ]}
      />
      <Route
        path="/faq"
        element={[<BlockTitle title="Почему именно мы" />, <MultyCarousel />]}
      />
      <Route
        path="/fee"
        element={[<BlockTitle title="Наши тарифы" />, <FeeContainer />]}
      />
    </Routes>
  );
}

export default Main;
