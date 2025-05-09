import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

export default function AnimatedCounter({ end, suffix = '', duration = 2.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {isInView && (
        <CountUp
          end={end}
          suffix={suffix}
          duration={duration}
          separator=","
        />
      )}
    </div>
  );
} 