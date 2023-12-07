"use client";

import { motion } from "framer-motion";
import RecipeCard from "./RecipeCard";
import { useState, useEffect, useRef } from "react";

function Slider() {
  const [width, setWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function setSliderWidth() {
      if (containerRef.current !== null) {
        setWidth(
          containerRef.current?.scrollWidth +
            +containerRef.current?.translate -
            containerRef.current.offsetWidth,
        );
      }
    }

    setSliderWidth();
    addEventListener("resize", setSliderWidth);
  }, []);

  console.log(containerRef.current?.offsetWidth);
  console.log(containerRef.current?.scrollWidth);
  console.log(width);

  return (
    <>
      <p className="text-3xl">{containerRef.current?.scrollWidth}</p>
      <p className="text-3xl">{containerRef.current?.offsetWidth}</p>
      <p className="text-3xl">{width}</p>
      <motion.div ref={containerRef} className="px-4">
        <motion.div
          className="flex gap-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div key={i} className="[&>*]:pointer-events-none">
              <RecipeCard />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Slider;
