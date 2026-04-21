import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import { articleData, articleConfig } from "../data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const size = {
  mobile: '768px',
  tablet: '1024px',
};

const SectionContainer = styled.section`
  overflow: hidden;
  position: relative;
  height: 100vh;

  [class$="-inner"] { 
    width: 100%;
    height: 100%;
    position: relative;
  }

  article {
    height: 100%;
    position: relative;
  }

  .text-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #eee;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    padding: 80px 60px;
    margin: 0 20px;
    z-index: 2;
    word-break: keep-all;
    
    ${props => props.type === 'brand' ? `
      left: 0;
      text-align: left;
    ` : `
      right: 0;
      text-align: right;
    `}

    h2 {
      line-height: 1.2;
      font-size: 3.5rem;
      font-weight: 800;
      color: #E5E5E5;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-shadow: 0 0 10px ${props => props.type === 'brand' ? 'rgba(185, 221, 26, 0.5)' : 'rgba(229, 9, 20, 0.5)'};
    }

    h2 + p {
      font-size: 1.1em;
      line-height: 1.8;
      margin: 30px 0 70px 0;
    }

    a {
      position: relative;
      display: inline-block;
      font-size: 1.3em;
      padding: 20px 30px;
      border-radius: 4px;
      box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.2);
      transition: all 0.2s ease;
      ${props => props.type === 'brand' ? `
        color: #eee;
        background-color: #E3000B;
        box-shadow: 0 0 30px rgba(227, 0, 11, 0.7);
      ` : `
        color: #000;
        background-color: #ffd500;
        box-shadow: 0 0 30px rgba(255, 213, 0, 0.7);
      `}

      &::before {
        content: "";
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        height: 10px;
        ${props => props.type === 'brand' ? `
          width: 60%;
          background-image: linear-gradient(to right, #E3000B 0%, #E3000B 35%, transparent 35%, transparent 65%, #E3000B 65%, #E3000B 100%);
        ` : `
          width: 80%;
          background-image: linear-gradient(to right, #ffd500 0%, #ffd500 15%, transparent 15%, transparent 28.3%, #ffd500 28.3%, #ffd500 43.3%, transparent 43.3%, transparent 56.6%, #ffd500 56.6%, #ffd500 71.6%, transparent 71.6%, transparent 85%, #ffd500 85%, #ffd500 100%);
        `}
      }

      &:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
      }
    }
  }

  .img-wrap {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 900px;
    z-index: 1;
    ${props => props.type === 'brand' ? 'right: 0;' : 'left: 0;'}
    will-change: transform;
    pointer-events: none;

    img {
      width: 100%;
    }
  }

  /* 태블릿 */
  @media (max-width: ${size.tablet}) {
    .text-box {
      top: 30%;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 12px;
      padding: 50px 30px;
      margin: 0 10px;

      h2 {
        font-size: 3em;
      }

      h2 + p {
        font-size: 0.9em;
        margin: 30px 0;
      }
    }

    .img-wrap {
      bottom: 130px;
      width: 80%;
    }
  }

  /* 모바일 */
  @media (max-width: ${size.mobile}) {
    height: auto !important;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    [class$="-inner"] {
      height: auto !important;
      min-height: 100vh;
    }

    article {
      height: auto !important;
      display: flex;
      flex-direction: column-reverse;
      padding: 40px 0;
    }

    .text-box {
      position: relative !important; 
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      transform: none !important;
      width: auto;
      margin: -50px 20px 40px;
      padding: 40px 20px;
      text-align: center;
      z-index: 10;

      h2 {
        font-size: 2.5rem;
      }
      
      h2 + p {
        margin: 20px 0 40px;
      }
    }

    .img-wrap {
      position: relative !important;
      top: 0 !important;
      left: 0 !important;
      transform: none !important;
      width: 100%;
      margin: 0;
      padding: 0 20px;
      box-sizing: border-box;
      
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

function ArticleSection({ type }) {
  const sectionRef = useRef(null);
  const textBoxRef = useRef(null);
  const imgRef = useRef(null);
  const data = articleData[type];
  const style = articleConfig[type];

  useEffect(() => {
    const section = sectionRef.current;
    const textBox = textBoxRef.current;
    const img = imgRef.current;

    const isMobile = window.innerWidth <= 768;

    gsap.fromTo(textBox,
      { opacity: 0, y: isMobile ? 50 : 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    if (type === "cross") {
      gsap.fromTo(img,
        { x: isMobile ? 0 : "-120vw", rotation: isMobile ? 0 : -15, scale: 0.8 },
        {
          x: "0vw", rotation: 0, scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "center center",
            scrub: isMobile ? false : 2,
          }
        }
      );
    } else {
      gsap.fromTo(img,
        { y: isMobile ? 0 : 150, scale: 0.9 },
        {
          y: isMobile ? 0 : -150, scale: 1.1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [type]);

  if (!data || !style) return null;

  return (
    <SectionContainer type={type} ref={sectionRef}>
      <div className={style.innerClass}>
        <article className={type}>
          <div className="text-box" ref={textBoxRef}>
            <h2>
              {data.title.map((line, idx) => (
                <React.Fragment key={`${type}-title-${idx}`}>
                  {line} <br />
                </React.Fragment>
              ))}
            </h2>
            <p>
              {data.desc.map((line, idx) => (
                <React.Fragment key={`${type}-desc-${idx}`}>
                  {line} <br />
                </React.Fragment>
              ))}
            </p>
            <a href="#">{style.btnText}</a>
          </div>
          <div className="img-wrap">
            <img src={process.env.PUBLIC_URL + data.imgSrc} alt={type} ref={imgRef} />
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}

export default ArticleSection;