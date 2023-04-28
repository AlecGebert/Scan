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
          <Banner
            key={0}
            auth={props.auth}
            toggleSearch={props.toggleSearch}
          />,
          <BlockTitle key={1} title="Почему именно мы" />,
          <MultyCarousel key={2} />,
          <BannerTwo key={3} />,
          <BlockTitle key={4} title="Наши тарифы" />,
          <FeeContainer key={5} />,
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
