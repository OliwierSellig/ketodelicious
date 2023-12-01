"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import CountUp from "react-countup";

interface AchievementNumberProps {
  number: number;
}

function AchievementNumber({ number }: AchievementNumberProps) {
  const { ref: myRef, inView } = useInView();
  const [hasCounted, setHasCounted] = useState<boolean>(false);

  useEffect(() => {
    if (inView && !hasCounted) {
      setHasCounted(true);
    }
  }, [inView, hasCounted]);
  return (
    <h3
      className="text-4xl font-bold font-ubuntu mb-1 mdl:text-3xl"
      ref={myRef}
    >
      {hasCounted ? (
        <>
          <CountUp delay={0} end={number} separator="" />
          <span>+</span>
        </>
      ) : (
        0
      )}
    </h3>
  );
}

export default AchievementNumber;
