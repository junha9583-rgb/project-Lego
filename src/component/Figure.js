import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { visualData, visualConfig } from "../data";

const size = {
  mobile: '768px',
  tablet: '1024px',
};

const VisualContainer = styled.figure`
  width: 100%;
  height: calc(100vh - 90px);

  .main-banner-swiper,
  .swiper-wrapper,
  .slide-item,
  .slide-item > div {
    height: 100%;
  }

  .img-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 24px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .text-box {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    word-break: keep-all;

    h2 {
      font-size: 2em;
      cursor: default;
      .line-0 {
        font-size: 24px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 10px;
        letter-spacing: -0.02em;
      }
      .line-1 {
        font-size: 64px;
        font-weight: 900;
        color: #fff;
        text-shadow: 0 0 20px #E3000B;
      }
    }

    h2 + p {
      margin: 60px 0;
      cursor: default;
    }

    a {
      position: relative;
      display: inline-flex;
      font-size: 1.3em;
      font-weight: bold;
      padding: 20px 30px;
      border-radius: 4px;
      box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.3);
      transition: all 0.2s ease;
      &::before {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        height: 15px;
      }
      &:hover {
        filter: brightness(1.1);
        top: -2px;
      }
    }
  }

  .slide-item.slide-1 {
    .text-box {
      left: 50%;
      a {
        background-color: #ffd500;
        color: #000;
        &::before {
          width: 80%;
          background-image: linear-gradient(to right,
            #ffd500 0%, #ffd500 15%,
            transparent 15%, transparent 28.3%,
            #ffd500 28.3%, #ffd500 43.3%,
            transparent 43.3%, transparent 56.6%,
            #ffd500 56.6%, #ffd500 71.6%,
            transparent 71.6%, transparent 85%,
            #ffd500 85%, #ffd500 100%);
        }
      }
    }
  }

  .slide-item.slide-2 {
    .text-box {
      left: 53%;
      h2 {
        font-family: 'Crimson Text', serif;
        transform: rotate(-1.5deg);
        letter-spacing: -0.01em;
        .line-0 {
          font-size: 28px;
          color: #4e342e;
          font-style: italic;
          text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
          margin-bottom: 5px;
        }
        .line-1 {
          font-size: 72px;
          font-weight: 900;
          margin-left: 20px;
          color: #4e342e;
          text-transform: uppercase;
          text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.6);
          mix-blend-mode: multiply;
          opacity: 0.9;
        }
      }
      h2 + p {
        font-size: 0.98em;
        color: #000;
      }
      a {
        background-color: #E3000B;
        color: #eee;
        &::before {
          width: 60%;
          background-image: linear-gradient(to right,
            #E3000B 0%, #E3000B 35%,
            transparent 35%, transparent 65%,
            #E3000B 65%, #E3000B 100%);
        }
      }
    }
  }

  .slide-item.slide-3 {
    .text-box {
      left: 30%;
      h2 {
        .line-0 {
          display: inline-block;
          font-family: 'Stardos Stencil', sans-serif;
          font-size: 50px;
          font-weight: 900;
          color: #fff;
          font-style: italic;
          transform: skewX(-15deg);
          text-shadow:
            -4px 0 5px #00ffcc,
            -8px 0 15px rgba(0, 255, 204, 0.5),
            -16px 0 25px rgba(0, 255, 204, 0.3),
            -32px 0 35px rgba(0, 255, 204, 0.1);
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
        }
      }
      h2 + p { color: #eee; }
      a {
        background-color: #0055AD;
        color: #eee;
        &::before {
          width: 80%;
          background-image: linear-gradient(to right,
            #0055AD 0%, #0055AD 20%,
            transparent 20%, transparent 40%,
            #0055AD 40%, #0055AD 60%,
            transparent 60%, transparent 80%,
            #0055AD 80%, #0055AD 100%);
        }
      }
    }
  }
    
  /* 태블릿 */
  @media (max-width: ${size.tablet}) {
    height: auto;
    .main-banner-swiper,
    .swiper-wrapper,
    .slide-item,
    .slide-item > div {
      height: auto; 
    }
    .img-wrap {
      height: auto;
      border-radius: 12px;
      img {
        width: 100%;
        height: auto; 
        object-fit: initial;
      }
    }
    .text-box {
      position: absolute; 
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
      text-align: center;
      h2 {
        font-size: 1em;
        .line-0 { font-size: 12px; }
        .line-1 { font-size: 32px; }
      }
      h2 + p { display: none; }
      a {
        font-size: 1em;
        padding: 15px 20px;
        margin-top: 50px;
        &:hover {
          filter: none;
          top: 0;
        }
      }
    }

    .slide-item.slide-1 .text-box { left: 50%; a { background-color: #ffd500; color: #000; } }
    .slide-item.slide-2 .text-box { 
      left: 53%; 
      h2 { .line-0 { font-size: 24px; } .line-1 { font-size: 40px; margin-left: 0; } } 
    }
    .slide-item.slide-3 .text-box { left: 50%; top: 50%; transform: translate(-50%, -50%); h2 { .line-0 { font-size: 30px; } } }
  }

  /* 모바일 */
  @media (max-width: ${size.mobile}) {
    height: calc(100vh - 90px);
    .main-banner-swiper,
    .swiper-wrapper,
    .slide-item,
    .slide-item > div { height: 100%; }
    .img-wrap {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      img { width: 100%; height: 100%; object-fit: cover; }
    }
    .text-box {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      line-height: 1.4;
      h2 {
        .line-0 { font-size: 20px; font-weight: 500; color: rgba(255, 255, 255, 0.8); margin-bottom: 10px; letter-spacing: -0.02em; }
        .line-1 { font-size: clamp(24px, 5vw, 64px); font-weight: 900; color: #fff; text-shadow: 0 0 20px #E3000B; }
      }
      a { font-size: 1em; padding: 15px 20px; margin-top: 50px; &:hover { filter: none; top: 0; } }
    }
    .slide-item.slide-1 .text-box { h2 .line-1 { font-size: 40px; } a { font-size: 1em; padding: 15px 10px; margin-top: 50px; } }
    .slide-item.slide-2 .text-box {
      width: 100%;
      &::after {
        content: ""; position: absolute; width: 200%; top: 0; bottom: 0; left: 0; right: 0;
        background-color: rgba(255, 255, 255, 0.8); box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.3);
        z-index: -1; transform: translateX(-50%);
      }
      h2 .line-1 { font-size: 56px; margin-left: 10px; }
    }
    .slide-item.slide-3 .text-box { h2 .line-0 { font-size: 50px; } }
  }
`;

function Figure() {
  const slideKeys = Object.keys(visualData);

  return (
    <VisualContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop={true}
        className="main-banner-swiper"
      >
        {slideKeys.map((key) => {
          const data = visualData[key];
          const config = visualConfig[key];

          return (
            <SwiperSlide key={key} className={`slide-item ${config.sectionClass}`}>
              <div className={config.innerClass}>
                <div className="img-wrap">
                  <picture>
                    <source
                      srcSet={process.env.PUBLIC_URL + data.mobileImgSrc}
                      media={`(max-width: ${size.mobile})`}
                    />
                    <img
                      src={process.env.PUBLIC_URL + data.imgSrc}
                      alt={key}
                    />
                  </picture>
                </div>
                <div className="text-box">
                  <h2>
                    {data.title.map((line, i) => (
                      <React.Fragment key={line}>
                        <span className={`line-${i}`}>{line}</span>
                        <br />
                      </React.Fragment>
                    ))}
                  </h2>
                  <p>
                    {data.desc.map((line) => (
                      <React.Fragment key={`${key}-${line}`}>
                        {line}<br />
                      </React.Fragment>
                    ))}
                  </p>
                  <a href="#" className="more-btn">{data.btnText}</a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </VisualContainer>
  );
}

export default Figure;