import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SuccessSlider.css"; // Optional custom styles
import std1 from "../assets/std1.jpg";
import std2 from "../assets/std2.jpg";
import std3 from "../assets/std3.jpg";
const SuccessSlider = () => {
    const successStories = [
        {
          name: "Anjali Mehra",
          story: "Anjali Mehra, a small-town girl from Rajasthan, cracked the IIT-JEE and secured a seat at IIT Bombay. With Mamata Foundation’s mentorship, she overcame financial struggles and is now pursuing Computer Science. She aims to start her own ed-tech company to help rural students like herself.",
          img: std1,
        },
        {
          name: "Ravi Prakash",
          story: "Ravi Prakash, once the son of a daily wage worker in Bihar, dreamt of becoming a doctor. Through Mamata Foundation’s scholarship and NEET coaching, he aced the exam and is now studying at AIIMS Delhi. He volunteers at local clinics on weekends, giving back to his community.",
          img: std2,
        },
        {
          name: "Pooja Sharma",
          story: "Pooja Sharma always dreamed of studying abroad but faced major financial barriers. With the help of Mamata Foundation's mentorship program, she secured a full scholarship to the University of Toronto. She now advocates for equal education opportunities for underprivileged girls worldwide.",
          img: std3,
        }
      ];
      

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section id="success" className="slider-section" data-aos="zoom-in">
      <h2>Success Stories</h2>
      <Slider {...settings}>
  {successStories.map((story, index) => (
    <div key={index} className="slide">
    <div className="slide-image">
      <img src={story.img} alt={story.name} />
    </div>
    <div className="slide-content">
      <h3>{story.name}</h3>
      <p>{story.story}</p>
    </div>
  </div>
  
  ))}
</Slider>

    </section>
  );
};

export default SuccessSlider;
