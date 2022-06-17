import React from "react";
import styled, { css, keyframes } from "styled-components";

const columnAnimate = keyframes`
0% {
  transform: translateY(20px);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}`;

const AnimateBox = styled.div<{
  delay: string;
}>`
  opacity: 0;
  ${({ delay }) =>
    delay &&
    css`
      animation: ${columnAnimate} 700ms;
      animation-delay: ${delay};
    `}
`;

const AnimationHandler: React.FC<{
  children: React.ReactNode;
  delay: string;
}> = ({ children, delay }) => {
  return <AnimateBox delay={delay}>{children}</AnimateBox>;
};

export default AnimationHandler;
