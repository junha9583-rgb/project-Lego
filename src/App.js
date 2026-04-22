import React, { useEffect } from 'react';
import Header from './component/Header';
import Figure from './component/Figure';
import ArticleSection from './component/ArticleSection';
import ProductSection from './component/ProductSection';
import Footer from './component/Footer';
import { GlobalStyle } from './styles/GlobalStyle';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #000;
`;

const BackgroundLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.className === 'bg-front' ? '250vh' : '180vh'}; 
  z-index: ${props => props.zIndex};
  background-repeat: no-repeat;
  will-change: transform;
`;

function App() {
  useEffect(() => {

    gsap.to(".bg-base", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      }
    });

    gsap.to(".bg-mid", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    gsap.fromTo(".bg-front",
      { y: 0 },
      {
        y: "-50vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      }
    );
  }, []);

  return (
    <div className="all-wrap">
      <GlobalStyle />
      <ParallaxContainer style={{ backgroundColor: '#000' }}>
        <BackgroundLayer
          className="bg-base"
          zIndex={0}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image/bg-far.webp)`,
            backgroundSize: 'cover',
            filter: 'blur(1px)',
            opacity: 0.4
          }}
        />

        <BackgroundLayer
          className="bg-mid"
          zIndex={1}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image/bg-mid.webp)`,
            backgroundSize: '100%',
            backgroundPosition: '20% center',
            filter: 'blur(8px) brightness(0.8)',
            opacity: 0.7
          }}
        />

        <BackgroundLayer
          className="bg-front"
          zIndex={2}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/image/bg-front.webp)`,
            backgroundSize: '90%',
            backgroundPosition: 'center 10%',
            filter: 'blur(0px) brightness(1.1)',
            opacity: 0.9,
          }}
        />

        <div style={{ position: 'relative', zIndex: '3' }}>
          <Header />
          <main id="main">
            <div className="main-inner">
              <Figure />
              <ArticleSection type="brand" />
              <ArticleSection type="cross" />
              <ProductSection type="best" title="Best" />
              <ProductSection type="new" title="New" />
            </div>
          </main>
          <Footer />
        </div>
      </ParallaxContainer>
    </div>
  );
}

export default App;