import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlideCard from "./SlideCard";
import clock from "../assets/clock.jpg";
import search from "../assets/search.jpg";
import sword from "../assets/sword.jpg";

function MultyCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      style={{ width: "91%", margin: "0 auto", marginTop: "7rem" }}
      className="carousel-wrapper"
    >
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        style={{ marginTop: "7rem" }}
        responsive={responsive}
      >
        <SlideCard
          src={clock}
          subscribe="Высокая и оперативная скорость обработки заявки"
        />
        <SlideCard
          src={search}
          subscribe="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
        />
        <SlideCard
          src={sword}
          subscribe="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
        />
        <SlideCard
          src={clock}
          subscribe="Высокая и оперативная скорость обработки заявки"
        />
        <SlideCard
          src={search}
          subscribe="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
        />
        <SlideCard
          src={sword}
          subscribe="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
        />
      </Carousel>
    </div>
  );
}

export default MultyCarousel;
