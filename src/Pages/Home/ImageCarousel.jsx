import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from "../../data/index.json";



function PortfolioCarousel({ data }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows for navigation
  };

  return (
    <Slider {...settings}>
      {data?.portfolio?.map((item, index) => (
        <div key={index} className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src={item.src} alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
            <p className="text-sm portfolio--link">
              {item.link}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  strokeWidth="2.66667" // Use 'strokeWidth' instead of 'stroke-width'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default PortfolioCarousel;

