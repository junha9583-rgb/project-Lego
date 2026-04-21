import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import { productConfig } from "../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = styled.section`
  .cont-3-inner,
  .cont-4-inner {
    width: 100%;
    padding-bottom: 150px;
  }

  h2 {
    font-size: 4em;
    font-weight: 900;
    color: transparent;
    letter-spacing: 8px;
    text-align: center;
    margin-bottom: 100px;
    -webkit-text-stroke: 2px #00E676;
    
    text-shadow: ${props => props.type === 'best'
    ? `0 0 8px rgba(255, 215, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.15)`
    : `0 0 8px rgba(0, 163, 224, 0.6), 0 0 20px rgba(0, 163, 224, 0.3), 0 0 40px rgba(0, 163, 224, 0.15)`
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
        <h2 ref={titleRef}>{title}</h2>

        <div ref={swiperRef}>
          <Swiper
            id={`${type}-list`}
            className="my-product-swiper"
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ el: `.${type}-pagination`, clickable: true }}
            slidesPerView={4}
            slidesPerGroup={2}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 15, slidesPerGroup: 1 },
              780: { slidesPerView: 3, spaceBetween: 20, slidesPerGroup: 2 },
              1280: { slidesPerView: 4, spaceBetween: 30, slidesPerGroup: 2 }
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
        </div>
        <div className={`${type}-pagination pagination-wrapper`}></div>
      </div>
    </SectionWrapper>
  );
}

export default ProductSection;