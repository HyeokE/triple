import styled, { css } from "styled-components";

import playStoreBadge from "../../assets/play-store2x.png";
import appStoreBadge from "../../assets/badge-apple4x.png";

const PLATFORM_TYPES = {
  google: playStoreBadge,
  apple: appStoreBadge,
} as const;
type PlatformType = "google" | "apple";

export const BadgeWrapper = styled.div`
  margin-top: 50px;
  white-space: nowrap;
`;

export const BadgeInner = styled.div<{ platform: PlatformType }>`
  background-size: 5.4rem 5.4rem;
  height: 5.4rem;
  padding: 0.5rem 0 0.5rem 6.2rem;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 2.2rem;
  margin-right: 3.9rem;
  display: inline-block;
  ${({ platform }) => {
    const badge = PLATFORM_TYPES[platform];
    return css`
      background-image: url(${badge});
    `;
  }}
  background-position: left top;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.gray800};
  font-weight: bold;
`;
