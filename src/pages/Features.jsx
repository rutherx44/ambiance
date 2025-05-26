import React from "react";
import acoustics from "../assets/acoustics.png";
import built from "../assets/built.png";
import ceiling from "../assets/ceiling.png";
import layouting from "../assets/layouting.png";
import lighting from "../assets/lighting.png";
import planning from "../assets/planning.png";
import { MoveLeft, MoveRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Features = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center mt-24 text-center mx-auto gap-10">
        <h2 id="whatwedo" className="font-alice">
          What We Do
        </h2>
        <p className="font-corbel sub_header px-[1rem] sm:px-[5.625rem] xl:px-[9.375rem] lg:w-[70rem]">
          We strive to push our imagination for a fresh look injected with
          design savvy and an eye for detail in the modern and eclectic styles
          we predominantly design in.
        </p>
      </section>
      <section className="mt-12">
        <div className="flex flex-row font-alice">
          <Swiper
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            breakpoints={{
              520: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col group transition-all">
                <div className="flex flex-col justify-center">
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={planning}
                    alt="Space Planning"
                  />
                  <h4 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all">
                    Space Planning
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center group transition-all">
                <div className="flex flex-col justify-center">
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={layouting}
                    alt="Layout"
                  />
                  <h4 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all">
                    Layouting
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center group transition-all">
                <div className="flex flex-col justify-center">
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={built}
                    alt="Built-In/Custom Furniture"
                  />
                  <h4 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all">
                    Built-In / Custom Furniture
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center group transition-all">
                <div className="flex flex-col justify-center">
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={lighting}
                    alt="Lightning"
                  />
                  <h4 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all">
                    Lightning
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center group transition-all">
                <div className="flex flex-col justify-center">
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={acoustics}
                    alt="Acoustics"
                  />
                  <h4 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all">
                    Acoustics
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center group transition-all">
                <div className="flex flex-col justify-center">
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={ceiling}
                    alt="Ceilling Designs"
                  />
                  <h4 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all">
                    Ceilling Designs
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center gap-12 mt-8">
          <div className="button-prev-slide">
            <MoveLeft
              className="hover:text-[#F7941D] transition-all w-8 h-8  md:w-[2.625rem] md:h-9"
              sx={{ fontSize: 30 }}
            />
          </div>
          <div className="button-next-slide">
            <MoveRight
              className="hover:text-[#F7941D] transition-all w-8 h-8 md:w-[2.625rem] md:h-9"
              sx={{ fontSize: 30 }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
