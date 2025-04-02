"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const domains = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Product Management",
  "Cloud Architecture",
  "DevOps",
];

const getRandomPosition = () => {
  // Random horizontal spread at the bottom of the page
  return {
    x: (Math.random() - 0.5) * window.innerWidth * 0.8, // 80% of screen width
    y: window.innerHeight * 0.8, // Near bottom of the screen
  };
};

export const DomainList = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [hasExploded, setHasExploded] = useState(false);
  const [hoverStartTime, setHoverStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (isHovered && !hasExploded) {
      setHoverStartTime(Date.now());
      const shakeTimeout = setTimeout(() => {
        setIsShaking(true);
      }, 2000);

      const explodeTimeout = setTimeout(() => {
        setHasExploded(true);
        setIsShaking(false);
      }, 5000);

      return () => {
        clearTimeout(shakeTimeout);
        clearTimeout(explodeTimeout);
      };
    } else if (!isHovered) {
      setIsShaking(false);
      setHasExploded(false);
      setHoverStartTime(null);
    }
  }, [isHovered, hasExploded]);

  const shakeAnimation = {
    rotate: [0, -1, 1, -2, 2, -1, 1, 0], // Subtle rotation shake
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  };

  return (
    <div className="relative">
      <motion.div
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isShaking ? shakeAnimation : {}}
        style={{ opacity: hasExploded ? 0 : 1 }}
      >
        Product Crafter
      </motion.div>
      <AnimatePresence>
        {hasExploded && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {domains.map((domain, index) => {
              const finalPosition = getRandomPosition();
              return (
                <motion.div
                  key={domain}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 1],
                    scale: [0.5, 1, 1],
                    x: [0, finalPosition.x * 0.3, finalPosition.x],
                    y: [0, window.innerHeight * 0.3, finalPosition.y],
                    rotate: Math.random() * 180 - 90,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.15,
                    times: [0, 0.4, 1],
                    ease: [0.645, 0.045, 0.355, 1],
                  }}
                  className="absolute left-1/2 top-0 -translate-x-1/2 text-white whitespace-nowrap text-xl font-bold"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  {domain}
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
