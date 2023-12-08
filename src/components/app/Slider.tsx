"use client";

import { motion, useMotionValue } from "framer-motion";
import RecipeCard from "./RecipeCard";
import { useState, useEffect, useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

function Slider() {
  const [width, setWidth] = useState<number>(0);
  const [dragX, setDragX] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [disabledButtons, setDisabledButtons] = useState<boolean>(false);
  const x = useMotionValue(0);
  const scrollValue = containerRef.current
    ? containerRef.current?.offsetWidth * 0.2
    : 0;

  useEffect(() => {
    function setSliderWidth() {
      if (containerRef.current !== null && sliderRef.current !== null) {
        setWidth(
          containerRef.current?.scrollWidth +
            +sliderRef.current?.style.transform
              .split(" ")[0]
              .replace(/[^0-9, .]/g, "") -
            containerRef.current.offsetWidth,
        );
      }
    }

    setSliderWidth();
    addEventListener("resize", setSliderWidth);
  }, []);

  function canDragLeft() {
    return dragX !== 0;
  }

  function dragLeft() {
    if (containerRef.current && sliderRef.current) {
      if (Math.abs(x.get()) - scrollValue < 0) {
        const newValue =
          sliderRef.current.offsetWidth - sliderRef.current.scrollWidth;
        sliderRef.current?.classList.add("transition-all");
        sliderRef.current?.classList.add("duration-200");
        x.set(0);
        setDragX(0);
        setTimeout(() => {
          sliderRef.current?.classList.remove("transition-all");
          sliderRef.current?.classList.remove("duration-200");
        }, 200);
      } else {
        sliderRef.current?.classList.add("transition-all");
        sliderRef.current?.classList.add("duration-200");
        x.set(-(Math.abs(dragX) - scrollValue));
        setDragX(x.get());
        setTimeout(() => {
          sliderRef.current?.classList.remove("transition-all");
          sliderRef.current?.classList.remove("duration-200");
        }, 200);
      }
    }
  }

  function canDragRight() {
    return sliderRef.current
      ? Math.abs(dragX) <
          Math.abs(
            sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth,
          )
      : false;
  }

  function dragRight() {
    if (containerRef.current && sliderRef.current) {
      if (
        Math.abs(x.get()) + scrollValue >=
        Math.abs(sliderRef.current.offsetWidth - sliderRef.current.scrollWidth)
      ) {
        const newValue =
          sliderRef.current.offsetWidth - sliderRef.current.scrollWidth;
        sliderRef.current?.classList.add("transition-all");
        sliderRef.current?.classList.add("duration-200");
        x.set(newValue);
        setDragX(x.get());
        setTimeout(() => {
          sliderRef.current?.classList.remove("transition-all");
          sliderRef.current?.classList.remove("duration-200");
        }, 200);
      } else {
        const newValue = Math.abs(dragX) + scrollValue;
        sliderRef.current?.classList.add("transition-all");
        sliderRef.current?.classList.add("duration-200");
        x.set(-newValue);
        setDragX(x.get());
        setTimeout(() => {
          sliderRef.current?.classList.remove("transition-all");
          sliderRef.current?.classList.remove("duration-200");
        }, 200);
      }
    }
  }

  return (
    <>
      <motion.div ref={containerRef} className="relative">
        <motion.button
          disabled={!canDragLeft() || disabledButtons}
          onClick={dragLeft}
          aria-label="Swipe Left"
          className="absolute left-0 top-1/2 z-30 -translate-y-1/2  rounded-full bg-jade-shade-2 p-2 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal"
        >
          <ChevronLeftIcon className="h-8 w-8 fill-white-normal" />
        </motion.button>
        <motion.div
          onDragEnd={() => {
            setDragX(x.get());
          }}
          className="flex gap-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
          ref={sliderRef}
          style={{ x }}
          onPanStart={() => {
            if (sliderRef.current) {
              sliderRef.current.style.pointerEvents = "none";
            }
          }}
          onPanEnd={() => {
            if (sliderRef.current) {
              sliderRef.current.style.pointerEvents = "auto";
            }
          }}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div key={i} className="">
              <RecipeCard />
            </motion.div>
          ))}
        </motion.div>
        <motion.button
          aria-label="Swipe Left"
          disabled={!canDragRight() || disabledButtons}
          onClick={dragRight}
          className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full bg-jade-shade-2 p-2 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal"
        >
          <ChevronRightIcon className="h-8 w-8 fill-white-normal" />
        </motion.button>
      </motion.div>
    </>
  );
}

export default Slider;
