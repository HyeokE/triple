import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";

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
  let animationId = 0;
  let nextNumber = 0;
  const getNextNumber = (timestamp: number) => {
    const result = Number(easeOutExpo(timestamp, duration).toFixed(3));
    nextNumber = Math.floor(result * num);
  };

  const throttled = useRef(
    throttle((timestamp) => getNextNumber(timestamp), 1000 / 60)
  );

  const countUpNumberAnimation = (timestamp: number) => {
    throttled.current(timestamp);
    setCount(nextNumber);
    frameRef = nextNumber;
    animationId = requestAnimationFrame(countUpNumberAnimation);
    if (timestamp >= duration || frameRef >= num) {
      frameRef = num;
      setCount(num);
      cancelAnimationFrame(animationId);
    }
  };

  useEffect(() => {
    trigger && requestAnimationFrame(countUpNumberAnimation);
    return () => cancelAnimationFrame(animationId);
  }, [num, trigger]);

  return count;
};
export default useCountUp;
