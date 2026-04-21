import React from "react";
import styled from 'styled-components';

const size = {
  mobile: '768px',
  tablet: '1024px',
};

const FooterContainer = styled.footer`
  color: #999;
  font-size: 0.9em;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  .footer-inner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px 20px;
    background: none;
  }

  .footer-1 {
    img {
      width: 200px;
      transition: all 0.3s;
    }
    a:hover img {
      transform: rotate(-5deg) translateY(1px);
    }
  }

  .footer-2 {
    flex: 1;
    text-align: center;

    .footer-list li {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      a {
        transition: all 0.2s;
        &:hover {
          color: #eee;
          text-decoration: underline;
        }
      }
    }
  }

  .footer-3 {
    .sns-wrap {
      display: flex;
      gap: 10px;
      a {
        transition: all 0.2s;
        &:hover {
          color: #eee;
        }
        i {
          font-size: 2em;
        }
      }
    }
  }

  /* 태블릿 */
  @media (max-width: ${size.tablet}) {
    .footer-inner {
      padding: 50px;
    }

    .footer-3 {
      .sns-wrap {
        flex-direction: column;
        gap: 5px;
        color: #eee;
      }
    }
  }

  /* 모바일 */
  @media (max-width: ${size.mobile}) {
    .footer-inner {
      justify-content: space-between;
      padding: 50px;
    }

    .footer-1 {
      img {
        width: 150px;
      }
    }

    .footer-2 {
      text-align: right;
    }

    .footer-3 {
      .sns-wrap {
        display: none;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-inner">
        <div className="footer-1">
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/image/brand-lego.svg`} alt="LOGO" />
          </a>
        </div>
        <div className="footer-2">
          <ul className="footer-list">
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보 처리방침</a></li>
            <li><a href="#">쿠키 정책</a></li>
            <li><a href="#">법적 고지</a></li>
          </ul>
        </div>
        <div className="footer-3">
          <div className="sns-wrap">
            <a href="#">
              <i className="fab fa-youtube-square"></i>
              <div className="blind">youtube</div>
            </a>
            <a href="#">
              <i className="fab fa-instagram-square"></i>
              <div className="blind">instagram</div>
            </a>
            <a href="#">
              <i className="fab fa-facebook-square"></i>
              <div className="blind">facebook</div>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
              <div className="blind">twitter</div>
            </a>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;