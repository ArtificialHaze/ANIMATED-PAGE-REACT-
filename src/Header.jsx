import React, { useRef } from "react";
import Button from "./Button";
import styled from "styled-components";
import { FaRocket, FaWallet } from "react-icons/fa";
import Hover3d from "./utils";

const Header = () => {
  const headerRef = useRef(null);

  const hoverImageCont = Hover3d(headerRef, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = Hover3d(headerRef, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <HeaderStyled ref={headerRef}>
      <nav>
        <div className="logo">
          <img width={36} src="Logo" alt="Logo" />
          <h2>Logo</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Search.." />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Auctions</a>
          </li>
          <li className="nav-item">
            <a href="#">Marketplace</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <Button icon={<FaWallet />} name="Attach Wallet" />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 style={{ fontWeight: 400 }}>Buy, collect and sell NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            reiciendis quaerat in, deleniti veniam provident, illo cupiditate
            eum vitae minus vero ad hic voluptate sit.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More.." />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
            style={{ transform: hoverImageCont.transform }}
          >
            <img
              src="Image"
              alt="Image"
              width={600}
              height={600}
              style={{ transform: imageHover.transform }}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  nav {
    padding: 0rem 4rem;
    display: flex;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;

      li {
        transform: scale(1);
        transition: all 200ms ease-in-out;
        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
`;

export default Header;
