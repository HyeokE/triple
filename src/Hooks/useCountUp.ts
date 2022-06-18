import { useEffect, useState } from "react";

type EaseOutExpoType = (timeDuration: number, duration: number) => number;

type UseCountUpType = (
  num: number,
  duration?: number,
  trigger?: boolean
) => number;

const easeOutExpo: EaseOutExpoType = (timeDuration, duration) => {
  return 1 - Math.pow(2, (-11 * timeDuration) / duration);
};

const useCountUp: UseCountUpType = (num, duration = 2000, trigger = true) => {
  const [count, setCount] = useState(0);
  let frameRef = 0;
  let animationId;

  const getNextNumber = (timestamp: number) => {
    const result = Number(easeOutExpo(timestamp, duration).toFixed(3));
    return Math.floor(result * num);
  };

  const countUpNumberAnimation = (timestamp: number) => {
    const next = getNextNumber(timestamp);
    setCount(next);
    frameRef = next;
    animationId = requestAnimationFrame(countUpNumberAnimation);
    if (timestamp >= duration) {
      frameRef = num;
      setCount(num);
    }
    if (frameRef >= num) {
      cancelAnimationFrame(animationId);
    }
  };
  useEffect(() => {
    trigger && requestAnimationFrame(countUpNumberAnimation);
  }, [num]);
  return count;
};
export default useCountUp;
