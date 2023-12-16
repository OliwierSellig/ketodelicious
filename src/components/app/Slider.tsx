"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

interface SliderProps {
  children: ReactNode;
  gap?: number;
}

function Slider({ children, gap = 1 }: SliderProps) {
  const x = useMotionValue(0);
  const [width, setWidth] = useState<number>(0);
  const [dragX, setDragX] = useState<number>(0);
  const [disabledButtons, setDisabledButtons] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragValue = containerRef.current
    ? containerRef.current?.offsetWidth * 0.5
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

  useEffect(() => {
    x.on("animationComplete", () => {
      setDisabledButtons(false);
      setDragX(x.get());
    });
  }, [x]);

  function classListManipulate(action: "add" | "remove") {
    if (action === "add") {
      sliderRef.current?.classList.add("transition-all");
      sliderRef.current?.classList.add("duration-500");
      sliderRef.current?.classList.add("ease-in-out");
      setDisabledButtons(true);
    }
    if ((action = "remove")) {
      setTimeout(() => {
        sliderRef.current?.classList.remove("transition-all");
        sliderRef.current?.classList.remove("duration-500");
        sliderRef.current?.classList.remove("ease-in-out");
        setDisabledButtons(false);
      }, 500);
    }
  }

  function canDragLeft() {
    return x.get() < 0;
  }

  function dragLeft() {
    if (containerRef.current && sliderRef.current) {
      classListManipulate("add");
      if (Math.abs(x.get()) - dragValue < 0) {
        x.set(0);
        setDragX(0);
      } else {
        x.set(-(Math.abs(dragX) - dragValue));
        setDragX(x.get());
      }
      classListManipulate("remove");
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
      classListManipulate("add");
      if (
        Math.abs(x.get()) + dragValue >=
        Math.abs(sliderRef.current.offsetWidth - sliderRef.current.scrollWidth)
      ) {
        const newValue =
          sliderRef.current.offsetWidth - sliderRef.current.scrollWidth;
        x.set(newValue);
        setDragX(x.get());
      } else {
        const newValue = Math.abs(dragX) + dragValue;
        x.set(-newValue);
        setDragX(x.get());
      }
      classListManipulate("remove");
    }
  }

  return (
    <>
      <motion.div ref={containerRef} className="relative mx-6">
        <motion.button
          disabled={!canDragLeft() || disabledButtons}
          onClick={dragLeft}
          aria-label="Swipe Left"
          className={`absolute left-0  top-1/2 z-30 -translate-x-1/2 -translate-y-1/2  rounded-full bg-jade-shade-2 p-2 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal ${
            disabledButtons || !canDragLeft() ? "opacity-70" : ""
          }`}
        >
          <ChevronLeftIcon className="h-8 w-8 fill-white-normal" />
        </motion.button>
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
          ref={sliderRef}
          style={{ x, gap: `${gap}rem` }}
          onPanStart={() => {
            if (sliderRef.current) {
              sliderRef.current.style.pointerEvents = "none";
              setDisabledButtons(true);
            }
          }}
          onPanEnd={() => {
            if (sliderRef.current) {
              sliderRef.current.style.pointerEvents = "auto";
            }
          }}
        >
          {children}
        </motion.div>
        <motion.button
          aria-label="Swipe Left"
          disabled={!canDragRight() || disabledButtons}
          onClick={dragRight}
          className={`absolute right-0 top-1/2 z-30 -translate-y-1/2 translate-x-1/2 rounded-full bg-jade-shade-2 p-2 transition-all duration-150 ease-linear hover:bg-jade-normal focus:bg-jade-normal ${
            disabledButtons || !canDragRight() ? "opacity-70" : ""
          }`}
        >
          <ChevronRightIcon className="h-8 w-8 fill-white-normal" />
        </motion.button>
      </motion.div>
    </>
  );
}

export default Slider;
