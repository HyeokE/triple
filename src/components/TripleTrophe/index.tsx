import tripleTrophe from "../../assets/triple2x.png";

import { TropheContent, TropheImage, TropheWrapper } from "./styled";

const TripleTrophe = () => {
  return (
    <TropheWrapper>
      <TropheImage src={tripleTrophe} />
      <TropheContent>2021년 12월 기준</TropheContent>
    </TropheWrapper>
  );
};

export default TripleTrophe;
