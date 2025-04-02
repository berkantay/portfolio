import React from "react";

interface SvgGridProps {
  svgs: string[];
}

const SvgGrid: React.FC<SvgGridProps> = ({ svgs }) => {
  const gridSize = Math.ceil(Math.sqrt(svgs.length) * 4);
  const gridItems = svgs.map((svg, index) => {
    const size = Math.floor(Math.random() * 11) + 60; // Random size between 20px and 30px
    const style = {
      width: `50px`,
      height: `50px`,
    };
    const fileName = svg.split("/").pop()?.split(".")[0] || "";
    const tooltip = fileName.charAt(0).toUpperCase() + fileName.slice(1);

    return (
      <div key={index} style={style} className="tooltip">
        <img src={svg} alt={fileName} className="img-white" />
        <span className="tooltiptext">{tooltip}</span>
      </div>
    );
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gap: "5px",
      }}
    >
      {gridItems}
    </div>
  );
};

export default SvgGrid;
