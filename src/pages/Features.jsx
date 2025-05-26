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
        <p className="font-corbel sub_header px-4 sm:px-[5.625rem] xl:px-[9.375rem] xl:w-[70rem]">
          We strive to push our imagination for a fresh look injected with
          design savvy and an eye for detail in the modern and eclectic styles
          we predominantly design in.
        </p>
      </section>
      <section className="mt-12 sm:px-[5.625rem] xl:px-[9.375rem]">
        <div className="font-alice">
          <Swiper
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            breakpoints={{
              520: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide>
              <div className="group transition-all">
                <div>
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={planning}
                    alt="Space Planning"
                  />
                  <h3 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all pl-3">
                    Space Planning
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="group transition-all">
                <div>
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={layouting}
                    alt="Layout"
                  />
                  <h3 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all pl-3">
                    Layouting
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="group transition-all">
                <div>
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={built}
                    alt="Built-In/Custom Furniture"
                  />
                  <h3 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all pl-3 truncate">
                    Built-In / Custom Furniture
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="group transition-all">
                <div>
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={lighting}
                    alt="Lightning"
                  />
                  <h3 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all pl-3">
                    Lightning
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="group transition-all">
                <div>
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={acoustics}
                    alt="Acoustics"
                  />
                  <h3 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all pl-3">
                    Acoustics
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="group transition-all">
                <div>
                  <img
                    className="group-hover:-translate-y-1 transition-all"
                    src={ceiling}
                    alt="Ceilling Designs"
                  />
                  <h3 className="group-hover:-translate-y-1 group-hover:text-[#F7941D] transition-all pl-3">
                    Ceilling Designs
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center gap-12 mt-8">
          <div className="button-prev-slide">
            <MoveLeft
              className="hover:text-[#F7941D] transition-all w-8 h-8 md:w-[2.625rem] md:h-9"
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
