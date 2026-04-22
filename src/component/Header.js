import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const size = {
  mobile: '768px',
  tablet: '1024px',
};

const GnbLink = styled.a`
  font-family: 'SandollSamlipHobbangBasic', sans-serif !important;
  font-size: 25px;
  letter-spacing: -0.5px;
  line-height: 1;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  image-rendering: pixelated;
`;

const HeaderContainer = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  height: 92px;

  .header-inner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    border-radius: 0 0 24px 24px;
  }

  h1 {
    position: relative;
    z-index: 10001;
    padding: 10px 0;
    a { display: block; }
    img {
      width: 70px;
      height: 70px;
    }
  }

  .gnb > ul {
    display: flex;
    gap: 15px;
    align-items: flex-end;
    padding-top: 10px;

    > li {
      position: relative;
      &:nth-child(1) { --point-color: #E3000B; }
      &:nth-child(2) { --point-color: #FFD500; }
      &:nth-child(3) { --point-color: #0055AD; }
      &:nth-child(4) { --point-color: #00853E; }
      &:nth-child(5) { --point-color: #FF8200; }

      @media (min-width: calc(${size.tablet} + 1px)) {
        &:hover > a {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }
        &:hover .snb {
          display: block;
        }
      }

      &.on > a {
        filter: brightness(1.2);
        transform: translateY(-2px);
      }
      &.on .snb {
        display: block;
      }

      > a {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        border-radius: 4px;
        transition: all 0.2s;
        box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.2);
        background-color: var(--point-color);
        color: #fff;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);

        &::before {
          content: "";
          position: absolute;
          top: -8px;
          left: 15%;
          right: 15%;
          height: 8px;
          background-image: linear-gradient(to right,
            var(--point-color) 0%, var(--point-color) 35%,
            transparent 35%, transparent 65%,
            var(--point-color) 65%, var(--point-color) 100%);
        }
      }
      &:nth-child(2) > a {
        color: #000;
        text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.3);
      }
    }
  }

  .snb {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 160px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 15px 0;
    border-radius: 0 0 8px 8px;
    z-index: 100;

    li a {
      display: block;
      padding: 18px 20px;
      color: #fff !important;
      font-size: 0.85em;
      font-weight: normal;
      background-color: transparent;
      box-shadow: none;
      border-radius: 0;
      transition: all 0.2s;
      &::before { display: none; }

      @media (min-width: calc(${size.tablet} + 1px)) {
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--point-color) !important;
          transform: none !important;
        }
      }
    }
  }

  .util {
    display: flex;
    justify-content: space-between;
    gap: 3vw;

    .search-box {
      display: flex;
      i {
        font-size: 1em;
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
        color: #fff;
        padding: 10px;
        border-right: 1px solid #000;
        border-radius: 20px 0 0 20px;
        margin: auto;
      }
      input {
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
        padding: 5px 10px;
        border-radius: 0 20px 20px 0;
        &::placeholder { color: rgba(255, 255, 255, 0.7); }
      }
    }
    .login-btn {
      padding: 5px 20px;
      font-size: 0.9em;
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(5px);
      color: #fff;
      border-radius: 20px;
      transition: all 0.2s;
      &:hover {
        background-color: #777;
      }
    }
  }

  .m-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10001;
    
    span {
      display: block;
      width: 25px;
      height: 2px;
      background-color: #fff;
      transition: all 0.3s;
    }
  }

  /* 태블릿 */
  @media (max-width: ${size.tablet}) {
    .header-inner {
      border-radius: 0 0 12px 12px;
      .util { display: none; }
    }
  }

  /* 모바일 */
  @media (max-width: ${size.mobile}) {
    .header-inner {
      justify-content: space-between;
    }

    h1 img { width: 70px; height: 70px; }

    .m-menu-btn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 35px;
      height: 24px;
      position: fixed;
      right: 20px;
      top: 33px;

      &.active span:nth-child(1) { transform: translateY(11px) rotate(45deg); }
      &.active span:nth-child(2) { opacity: 0; transform: translateX(10px); }
      &.active span:nth-child(3) { transform: translateY(-11px) rotate(-45deg); }
    }

    .gnb {
      display: none;
      &.active {
        display: block;
        position: fixed !important;
        top: 0 !important;
        bottom: 0 !important;
        right: 0 !important;
        left: 0 !important;
        height: 100dvh !important;
        background: #000;
        z-index: 10000;
        padding: 100px 40px;
        overflow-x: hidden;
        overflow-y: auto;
        box-sizing: border-box;
      }

      > ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px 20px;
        align-items: start;
        width: 100%;

        > li {
          width: 100%;
          &:nth-child(2) > a { color: #fff !important; text-shadow: none; }

          > a {
            display: block;
            background: none !important;
            box-shadow: none !important;
            padding: 0;
            font-size: 1.5em;
            color: #fff;
            font-weight: bold;
            margin-bottom: 10px;
            &::before { display: none !important; }
          }
          
          .snb {
            position: static;
            display: block;
            background: none;
            padding: 10px 0 0 0;
            li a {
              padding: 8px 0;
              font-size: 1em;
              color: rgba(255, 255, 255, 0.6) !important;
            }
          }
        }
        
        > li:last-child {
          grid-column: span 1; 
        }
      }
    }
  }
`;

function Header() {
  const headerRef = useRef(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (e, index) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setOpenSubMenu(openSubMenu === index ? null : index);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // GSAP Scroll Animation
  useEffect(() => {
    const header = headerRef.current;
    const showAnim = gsap.from(header, {
      yPercent: -100,
      paused: true,
      duration: 0.3
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.scroll() < 100) {
          showAnim.play();
        } else {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <HeaderContainer ref={headerRef}>
      <div className="header-inner">
        <h1>
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/image/brand-lego.svg`} alt="LOGO" />
            <div className="blind">LEGO</div>
          </a>
        </h1>

        <nav className={`gnb ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            {[
              { title: "제품", sub: ["시리즈별", "베스트 셀러", "신제품", "출시 예정"] },
              { title: "브랜드", sub: ["레고 역사", "레고 앱", "레고 매거진"] },
              { title: "오프라인", sub: ["레고 하우스", "레고랜드 파크", "디스커버리 센터", "레고 Insiders"] },
              { title: "이벤트", sub: ["이벤트", "혜택 및 파트너십", "행사"] },
              { title: "고객지원", sub: ["주문 현황", "배송 및 반품", "조립 설명서 검색", "문의하기"] },
            ].map((menu, idx) => (
              <li key={idx} className={openSubMenu === idx ? "on" : ""}>
                <GnbLink href="#" onClick={(e) => handleMenuClick(e, idx)}>
                  {menu.title}
                </GnbLink>
                <ul className="snb">
                  {menu.sub.map((s) => (
                    <li key={s}><GnbLink href="#">{s}</GnbLink></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <div className="util">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Search" />
          </div>
          <button className="login-btn">로그인</button>
        </div>

        <button
          className={`m-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </HeaderContainer>
  );
}

export default Header;