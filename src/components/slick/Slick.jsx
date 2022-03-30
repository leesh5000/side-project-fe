import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const nothing = Array(5).fill("Lorem Ipsum");

const Slick = () => {
  return (
    <Slider
      dots={true}
      infinite={true}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      arrows={false}
      speed={1000}
      autoplaySpeed={2000}
      useCSS={true}
    >
      {nothing.map((item, index) => (
        <section
          key={index}
          className="bg-indigo-500 h-24 text-white w-full text-center"
        >
          <article className="ml-40 w-full h-full flex justify-start items-center">
            {item} {index + 1}
          </article>
        </section>
      ))}
    </Slider>
  );
};

export default Slick;