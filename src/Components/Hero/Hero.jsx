import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../App.css';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import skills from '../../../public/skill.json'

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {skills.map((skill) => (
        <SwiperSlide key={skill.skillId}>
          <div
            className="relative h-[75vh] flex items-center justify-center bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${skill.image})` }}
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl p-8 rounded-2xl text-center max-w-xl mx-auto text-white transition-all duration-500 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
                {skill.skillName}
              </h2>
              <p className="mb-4 text-sm md:text-base opacity-90">
                {skill.description}
              </p>
              <p className="mb-5 text-sm">
                Instructor:{" "}
                <span className="font-semibold text-primary">
                  {skill.providerName}
                </span>
              </p>
              <button className="btn btn-primary btn-wide shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform duration-300">
                Join Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* Autoplay Progress Indicator */}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Hero;
