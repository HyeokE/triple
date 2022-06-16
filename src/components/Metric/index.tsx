import { MetricsContent, MetricsWrapper, StrongText } from "./styled";

const Metric = () => {
  return (
    <MetricsWrapper>
      <MetricsContent>
        <StrongText>700만 명</StrongText>의 여행자
      </MetricsContent>
      <MetricsContent>
        <StrongText>100만 개</StrongText>의 여행리뷰
      </MetricsContent>
      <MetricsContent>
        <StrongText>470만 개</StrongText>의 여행일정
      </MetricsContent>
    </MetricsWrapper>
  );
};

export default Metric;
