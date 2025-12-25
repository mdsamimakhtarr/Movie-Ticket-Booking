import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full bg-black">
      <Slider {...settings}>
        {/* Banner 1 */}
        <div className="relative h-[350px] md:h-[450px]">
          <img
            src="https://png.pngtree.com/background/20231018/original/pngtree-desolate-movie-theater-visualized-in-3d-picture-image_5596038.jpg"
            alt="Movie Banner 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center px-10">
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Blockbuster Movies
            </h2>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative h-[350px] md:h-[450px]">
          <img
            src="https://wallpaperaccess.com/full/1562143.jpg"
            alt="Movie Banner 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center px-10">
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Book Your Tickets Now
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CourselSection;
