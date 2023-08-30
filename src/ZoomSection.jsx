import React, { useRef } from "react";
import Hover3d from "./utils";
import styled from "styled-components";

const ZoomSection = () => {
  const hero = useRef(null);

  const hover = Hover3d(hero, {
    x: -5,
    y: 10,
    z: 4,
  });

  const hover2 = Hover3d(hero, {
    x: 40,
    y: 20,
    z: 7,
  });

  const hover3 = Hover3d(hero, {
    x: -40,
    y: -20,
    z: -7,
  });

  return (
    <ZoomStyled ref={hero}>
      <div
        className="image"
        style={{
          height: "50rem",
          width: "100%",
        }}
      >
        <img
          src="Spiral"
          alt="bulb tree"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: hover.transform,
            scale: 1.2,
            background: "var(--color-bg)",
          }}
        />

        <img
          src="Arm2"
          alt="bulb tree"
          className="monkey"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            objectPosition: "50% 0%",
            transform: hover2.transform,
            transition: hover2.transition,
          }}
        />

        <img
          src="Arm"
          alt="bulb tree"
          className="smoke"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: hover3.transform,
            transition: hover3.transition,
          }}
        />
      </div>
    </ZoomStyled>
  );
};

const ZoomStyled = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--color-border);

  .image {
    border-radius: 8px;
    img {
      border-radius: 8px;
    }
  }

  .monkey {
    position: absolute;
    top: 10%;
    right: 3rem;
  }

  .smoke {
    position: absolute;
    top: 10%;
    left: 3rem;
  }
`;

export default ZoomSection;
