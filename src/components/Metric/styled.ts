import styled from "styled-components";

export const MetricsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;
export const MetricsContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h3};
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  display: block;
`;
export const StrongText = styled.strong`
  font-size: ${({ theme }) => theme.fontSize.h3};
  letter-spacing: -0.1rem;
  color: ${({ theme }) => theme.colors.gray};
`;
