import styled from "styled-components";

import TripleTrophe from "../TripleTrophe";
import Metric from "../Metric";
import PlatformBadge from "../Awards";

const StatisticSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const MetricPlatformWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 223px;
`;

const StatisticSection = () => {
  return (
    <StatisticSectionWrapper>
      <TripleTrophe />
      <MetricPlatformWrapper>
        <Metric />
        <PlatformBadge />
      </MetricPlatformWrapper>
    </StatisticSectionWrapper>
  );
};

export default StatisticSection;
