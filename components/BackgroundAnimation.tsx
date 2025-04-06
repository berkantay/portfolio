"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Only show animation on main page
  const isMainPage = pathname === "/";

  useEffect(() => {
    if (!isMainPage) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuration
    const colors = {
      center: { r: 255, g: 255, b: 255 }, // White
      edge: { r: 20, g: 20, b: 20 }, // Near black
      border: { r: 255, g: 20, b: 147 }, // Pink
    };

    const circleBaseRadius = 15;
    const gridSpacing = 20;

    let width: number;
    let height: number;
    let maxDist: number;
    let gridCols: number;
    let gridRows: number;
    let animationFrameId: number;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Helper Functions
    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function lerpColor(
      colorA: { r: number; g: number; b: number },
      colorB: { r: number; g: number; b: number },
      t: number
    ) {
      const clampedT = Math.max(0, Math.min(1, t));
      return {
        r: Math.round(lerp(colorA.r, colorB.r, clampedT)),
        g: Math.round(lerp(colorA.g, colorB.g, clampedT)),
        b: Math.round(lerp(colorA.b, colorB.b, clampedT)),
      };
    }

    function getColor(distanceRatio: number) {
      return lerpColor(colors.center, colors.edge, distanceRatio);
    }

    function setup() {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;

      gridCols = Math.ceil(width / gridSpacing) + 2;
      gridRows = Math.ceil(height / gridSpacing) + 2;

      const centerX = width / 2;
      const centerY = height / 2;
      maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

      animate();
    }

    function animate() {
      ctx!.fillStyle = `rgb(${colors.edge.r}, ${colors.edge.g}, ${colors.edge.b})`;
      ctx!.fillRect(0, 0, width, height);

      const currentCenterX = width / 2;
      const currentCenterY = height / 2;

      for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
          const x = (c - 1) * gridSpacing;
          const y = (r - 1) * gridSpacing;

          const dx = x - currentCenterX;
          const dy = y - currentCenterY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const distRatio = Math.min(1.0, dist / maxDist);

          const fillColor = getColor(distRatio);
          ctx!.fillStyle = `rgb(${fillColor.r}, ${fillColor.g}, ${fillColor.b})`;

          // Draw circle
          ctx!.beginPath();
          ctx!.arc(x, y, circleBaseRadius, 0, Math.PI * 2);
          ctx!.fill();

          // Calculate distance from cursor to this point
          const cursorDx = x - mousePos.x;
          const cursorDy = y - mousePos.y;
          const cursorDist = Math.sqrt(
            cursorDx * cursorDx + cursorDy * cursorDy
          );

          // Apply pink border to circles based on cursor proximity
          if (cursorDist < 150) {
            const borderIntensity = 1 - cursorDist / 150;
            ctx!.strokeStyle = `rgba(${colors.border.r}, ${colors.border.g}, ${colors.border.b}, ${borderIntensity})`;
            ctx!.lineWidth = 2 * borderIntensity;
            ctx!.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    setup();

    const handleResize = () => setup();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [mousePos, isMainPage]);

  if (!isMainPage) return null;

  return (
    <div
      className="fixed inset-0 z-[-1]"
      style={{ backgroundColor: "#121212" }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
