import styled from "styled-components";

import TripleTrophe from "../TripleTrophe";
import Metric from "../Metric";
import PlatformBadge from "../Awards";
import AnimationHandler from "../../utils/AnimationHandler";

const StatisticSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const MetricPlatformWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22.3rem;
`;

const StatisticSection = () => {
  return (
    <StatisticSectionWrapper>
      <AnimationHandler delay="0ms">
        <TripleTrophe />
      </AnimationHandler>
      <MetricPlatformWrapper>
        <AnimationHandler delay="100ms">
          <Metric />
        </AnimationHandler>
        <AnimationHandler delay="200ms">
          <PlatformBadge />
        </AnimationHandler>
      </MetricPlatformWrapper>
    </StatisticSectionWrapper>
  );
};

export default StatisticSection;
