import useCountUp from "../../Hooks/useCountUp";

import { MetricsContent, MetricsWrapper, StrongText } from "./styled";

const METRICS_COUNT = {
  travelers: 700,
  reviews: 100,
  calendars: 470,
};

const Metric = () => {
  const travelerCount = useCountUp(METRICS_COUNT.travelers);
  const reviewCount = useCountUp(METRICS_COUNT.reviews);
  const calendarCount = useCountUp(METRICS_COUNT.calendars);
  return (
    <MetricsWrapper>
      <MetricsContent>
        <StrongText>{travelerCount}만 명</StrongText>의 여행자
      </MetricsContent>
      <MetricsContent>
        <StrongText>{reviewCount}만 개</StrongText>의 여행리뷰
      </MetricsContent>
      <MetricsContent>
        <StrongText>{calendarCount}만 개</StrongText>의 여행일정
      </MetricsContent>
    </MetricsWrapper>
  );
};

export default Metric;
