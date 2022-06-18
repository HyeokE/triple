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
  trigger: boolean | null;
}>`
  opacity: 0;
  ${({ trigger, delay }) =>
    trigger === null &&
    css`
      animation: ${columnAnimate} 700ms forwards;
      animation-delay: ${delay};
    `}
  ${({ trigger, delay }) =>
    trigger &&
    css`
      animation: ${columnAnimate} 700ms forwards;
      animation-delay: ${delay};
    `}
`;

const AnimationHandler: React.FC<{
  children: React.ReactNode;
  delay: string;
  trigger?: boolean;
}> = ({ children, delay, trigger = null }) => {
  return (
    <AnimateBox delay={delay} trigger={trigger}>
      {children}
    </AnimateBox>
  );
};

export default AnimationHandler;
