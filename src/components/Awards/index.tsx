import { BadgeInner, BadgeWrapper } from "./styled";

const PlatformBadge = () => {
  return (
    <BadgeWrapper>
      <BadgeInner platform="google">
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </BadgeInner>
      <BadgeInner platform="apple">
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </BadgeInner>
    </BadgeWrapper>
  );
};

export default PlatformBadge;
