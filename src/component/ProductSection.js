import React, { useEffect, useRef } from "react";
import { styled, keyframes } from 'styled-components';
import { productConfig } from "../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const size = {
  mobile: '768px',
  tablet: '1024px',
};

const CustomBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #000;
  box-shadow: 4px 4px 0px #000;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  i {
    font-size: 24px;
    color: #fff;
    filter: drop-shadow(2px 2px 0px #000);
  }

  &:hover {
    background: #E3000B;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 6px 6px 0px #000;

    i {
      color: #fff;
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
    box-shadow: 2px 2px 0px #000;
  }

  &.custom-prev { left: 30px; }
  &.custom-next { right: 30px; }

  @media (max-width: ${size.mobile}) {
    display: none;
  }
`;

const neonFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow:
      2px 2px 4px rgba(0, 0, 0, 0.9),
      0 0 10px var(--neon-color),
      0 0 20px var(--neon-color),
      0 0 40px var(--neon-color);
    opacity: 1;
  }
  20%, 22%, 24%, 55% {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
    opacity: 0.3;
  }
`;

const FlickerSpan = styled.span`
  display: inline-block;
  animation: ${neonFlicker} 2.5s linear infinite;
  -webkit-text-stroke: inherit;
`;

const SectionWrapper = styled.section`
  .cont-3-inner,
  .cont-4-inner {
    width: 100%;
    padding-bottom: 150px;
    text-align: center;
    position: relative;
  }

  .cont-4-inner {
    border-radius: 0 0 24px 24px;
  }

  h2 {
    font-size: 4em;
    font-weight: 900;
    color: ${props => (props.type === 'best' ? '#FFF176' : '#69F0AE')};
    letter-spacing: 8px;
    text-align: center;
    margin-bottom: 100px;
    -webkit-text-stroke: 1px ${props => (props.type === 'best' ? '#69F0AE' : '#FFF176')};
    text-shadow:
      2px 2px 3px rgba(0, 0, 0, 1),
      0 0 5px #000,
      ${props => props.type === 'best'
        ? `0 0 10px rgba(255, 215, 0, 0.9), 0 0 15px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 160, 0, 0.5), 0 0 40px rgba(255, 160, 0, 0.3)`
        : `0 0 10px rgba(0, 230, 118, 0.9), 0 0 15px rgba(0, 230, 118, 0.7), 0 0 30px rgba(0, 105, 92, 0.5), 0 0 40px rgba(0, 105, 92, 0.3)`
      };
  }

  .my-product-swiper {
    padding: 0 20px !important;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    border: 1px solid #777;
    border-radius: 12px;
    background-color: #222;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 20%, transparent 25%);
    background-size: 40px 40px;
    background-position: center;
    transition: all 0.2s;
    padding: 20px;

    &:hover {
      background-color: #333;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }

    .img-wrap {
      aspect-ratio: 1 / 1;
      img {
        width: 90%;
        height: 100%;
        object-fit: contain;
      }
    }

    .text-wrap {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 30px;
      color: #ddd;
      
      .price {
        color: #fff;
        margin: 10px 0;
      }
      
      .badge {
        opacity: 0.7;
        font-size: 0.8em;
      }
    }
  }

  .pagination-wrapper {
    margin-top: 20px;
    text-align: center;
  }

  .pagination-wrapper .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background: #555;
    border-radius: 50%;
    position: relative;
    box-shadow: inset 0 -2px 0 rgba(0,0,0,0.3);
    margin: 0 8px !important;
  }

  .pagination-wrapper .swiper-pagination-bullet::after {
    content: '';
    position: absolute;
    top: 3.5px;
    left: 3.5px;
    width: 7px;
    height: 7px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
  }

  .pagination-wrapper .swiper-pagination-bullet-active {
    background: ${props => (props.type === 'best' ? '#FFF176' : '#69F0AE')};
    box-shadow: 0 0 10px ${props => (props.type === 'best' ? 'rgba(255,241,118,0.6)' : 'rgba(105,240,174,0.6)')};
  }

  /* 태블릿 */
  @media (max-width: ${size.tablet}) {
    .cont-4-inner {
      border-radius: 0 0 12px 12px;
    }
  }

  /* 모바일 */
  @media (max-width: ${size.mobile}) {
    h2 {
      font-size: 2.5em;
      margin-bottom: 50px;
    }

    .swiper-slide {
      padding: 30px 20px;

      .img-wrap {
        width: 100%;
        max-height: 250px;
        margin: 0 auto;
      }

      .text-wrap {
        h3 { font-size: 1.2em; }
        .price { font-size: 1.1em; }
      }
    }

    .my-product-swiper {
      padding: 0 10px !important;
    }
  }
`;

function ProductSection({ type, title }) {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const titleRef = useRef(null);
  const tlRef = useRef(null);

  const current = productConfig[type];

  useEffect(() => {
    const swiper = swiperRef.current;
    const titleEl = titleRef.current;
    if (!swiper || !titleEl) return;

    const timeout = setTimeout(() => {
      const slides = swiper.querySelectorAll('.swiper-slide');

      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 10%",
          toggleActions: "play none none reverse",
        }
      });

      tlRef.current.fromTo(titleEl,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      tlRef.current.fromTo(slides,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
    }, 100);

    return () => {
      clearTimeout(timeout);
      tlRef.current?.scrollTrigger?.kill();
    };
  }, [type]);

  if (!current) return null;

  return (
    <SectionWrapper type={type} className={current.sectionClass} ref={sectionRef}>
      <div className={current.innerClass}>
        <h2 ref={titleRef}>
          {title.split("").map((char, index) => {
            if (index === 2) {
              return <FlickerSpan key={index}>{char}</FlickerSpan>;
            }
            return char;
          })}
        </h2>

        <div ref={swiperRef}>
          <Swiper
            id={`${type}-list`}
            className="my-product-swiper"
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            pagination={{ el: `.${type}-pagination`, clickable: true }}
            slidesPerView={4}
            slidesPerGroup={2}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 15, slidesPerGroup: 1 },
              780: { slidesPerView: 3, spaceBetween: 20, slidesPerGroup: 2, centeredSlides: false },
              1280: { slidesPerView: 4, spaceBetween: 30, slidesPerGroup: 2, centeredSlides: false }
            }}
            slideToClickedSlide={true}
            centeredSlidesBounds={true}
          >
            {current.products.map((item) => (
              <SwiperSlide key={`${type}-${item.id}`}>
                <a href="#">
                  <div className="img-wrap">
                    <img
                      src={process.env.PUBLIC_URL + item.img}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="text-wrap">
                    <h3>{item.name}</h3>
                    <p className="price">₩ {item.price}</p>
                    <div className="badge">#{item.tag}</div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <CustomBtn className="custom-prev">
            <i className="fa-solid fa-chevron-left"></i>
          </CustomBtn>
          <CustomBtn className="custom-next">
            <i className="fa-solid fa-chevron-right"></i>
          </CustomBtn>
        </div>

        <div className={`${type}-pagination pagination-wrapper`}></div>
      </div>
    </SectionWrapper>
  );
}

export default ProductSection;