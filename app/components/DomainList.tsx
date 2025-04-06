"use client";

import React, { useState, useEffect, useRef } from "react";

export const DomainList = () => {
  const [displayText, setDisplayText] = useState<
    Array<{ char: string; settled: boolean }>
  >([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const fullText = "product-crafter";
  const iterations = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAnimating) return;

    const randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    const animateText = () => {
      iterations.current += 1;

      const newText = [];
      for (let i = 0; i < fullText.length; i++) {
        // Determine if this character should be settled or still randomizing
        if (i < iterations.current / 3) {
          newText.push({ char: fullText[i], settled: true });
        } else if (fullText[i] === " ") {
          newText.push({ char: " ", settled: true });
        } else {
          // Get a random character
          const randomIndex = Math.floor(Math.random() * randomChars.length);
          newText.push({ char: randomChars[randomIndex], settled: false });
        }
      }

      setDisplayText(newText);

      // Stop the animation when all characters are settled
      if (iterations.current / 3 > fullText.length) {
        setIsAnimating(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    };

    // Reset the animation if it's restarting
    if (iterations.current === 0) {
      const initialText = Array(fullText.length)
        .fill("")
        .map((_, i) => ({
          char: fullText[i] === " " ? " " : "_",
          settled: fullText[i] === " ",
        }));
      setDisplayText(initialText);
    }

    intervalRef.current = setInterval(animateText, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAnimating, fullText]);

  // Restart animation on click
  const handleClick = () => {
    iterations.current = 0;
    setIsAnimating(true);
  };

  return (
    <div className="relative">
      <div
        className="font-bold text-xl cursor-pointer flex"
        onClick={handleClick}
      >
        {displayText.length > 0 ? (
          displayText.map((item, index) => (
            <span
              key={index}
              className={
                item.settled
                  ? "text-black"
                  : "text-pink-500 bg-white px-1 rounded mx-[0.5px]"
              }
            >
              {item.char}
            </span>
          ))
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
