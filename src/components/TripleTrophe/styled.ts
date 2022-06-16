import styled from "styled-components";

export const TropheWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: fit-content;
`;

export const TropheImage = styled.img`
  width: 400px;
  height: 338px;
`;
export const TropheContent = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.gray700};
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 42px;
`;
