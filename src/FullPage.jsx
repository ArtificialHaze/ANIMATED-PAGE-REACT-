import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const FullPage = () => {
  const secRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );

  return (
    <FullpageStyled>
      <motion.div
        className="image"
        style={{
          scale: scale,
          x: xTransform,
        }}
      >
        <img
          src="Rover"
          alt="monkey"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </motion.div>
    </FullpageStyled>
  );
};

const FullpageStyled = styled.div`
  .image {
    width: calc(100% - 10rem);
    height: 1000px;
    position: relative;
    border-radius: 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    transition: border 0.3s ease-in-out;

    img {
      padding: 1.5rem;
    }

    &:hover {
      border: 1px solid #f2994a;
    }
  }
`;

export default FullPage;
