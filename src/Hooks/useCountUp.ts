import { useEffect, useState } from "react";

function easeOut(t: number) {
  return t === 1 ? 1 : -Math.pow(2, -12 * t) + 1;
}

const DURATION = 2000;
const FRAME_RATE = 1000 / 60;

const useCountUp = (num: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const totalFrame = Math.round(DURATION / FRAME_RATE);
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = easeOut(frame / totalFrame);
      const currentNumber = Math.round(num * progress);
      if (num + 1 > currentNumber) {
        setCount(currentNumber);
      }
      if (progress === 1) {
        clearInterval(counter);
      }
    }, FRAME_RATE);
  }, [num]);
  return count;
};
export default useCountUp;
