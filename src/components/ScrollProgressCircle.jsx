import React, { useEffect, useState } from "react";

const SIZE = 56;
const STROKE = 6;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUM = 2 * Math.PI * RADIUS;

const ScrollProgressCircle = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const offset = CIRCUM * (1 - progress);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <svg width={SIZE} height={SIZE} style={{ transform: "rotate(-90deg)" }}>
        {/* Background circle */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={STROKE}
        />
        {/* Progress border */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#22D3EE"
          strokeWidth={STROKE}
          strokeDasharray={CIRCUM}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s linear" }}
        />
        {/* Arrow icon (optional) */}
        <polygon
          points={`${SIZE / 2 - 6},${SIZE / 2 + 4} ${SIZE / 2 + 6},${SIZE / 2 + 4} ${SIZE / 2},${SIZE / 2 - 8}`}
          fill="#fff"
          stroke="#22D3EE"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default ScrollProgressCircle;
