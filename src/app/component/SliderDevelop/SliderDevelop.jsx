'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Image from 'next/image';
import './SliderDevelop.css';  

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const SliderDevelop = () => {
  return (
    <div className="portfolio">
      <div className=''>
        <div className="line-container my-5">
          <span className="text-layer">
            THE LEADING MIXED-USE DEVELOPER IN EGYPT
          </span>
        </div>
        <div className="portfolio-pic">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            pagination={{ clickable: true }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="box-pic mb-4" style={{ borderRadius: "10px" }}>
                <div className="img-container">
                  <div className="overlay-pic"></div>
                  <Image
                    src="/resedeital.jpg"
                    alt=""
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className="content-container p-4">
                  <h2 style={{ fontSize: '25px', marginBottom: '0' }}>Resedeital</h2>
                  <p style={{ fontSize: '16px', textDecoration: 'underline', cursor: 'pointer' }}>Know more</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="box-pic mb-4" style={{ borderRadius: "10px" }}>
                <div className="img-container">
                  <div className="overlay-pic"></div>
                  <Image
                    src="/csr.jpg"
                    alt=""
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className="content-container p-4">
                  <h2 style={{ fontSize: '25px', marginBottom: '0' }}>CSR</h2>
                  <p style={{ fontSize: '16px', textDecoration: 'underline', cursor: 'pointer' }}>Know more</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            {/* Add more SwiperSlides as needed */}

          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderDevelop;

 