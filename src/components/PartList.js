import React from "react";

function PartList({ path, total, method, selected, scale = 1, top = 0 }) {
  let parts = [];
  for (let i = 1; i <= total; i++) {
    parts.push(
      <div
        key={`${path}${i}`}
        style={
          selected === i
            ? {
                border: "0.5px solid rgb(92, 95, 95, 0.7)",
                borderRadius: 5,
                backgroundColor: "#FCEABC",
                cursor: "pointer",
              }
            : {
                border: "0.5px solid rgb(92, 95, 95, 0.7)",
                borderRadius: 5,
                cursor: "pointer",
              }
        }
        onClick={() => method(i)}
      >
        <img
          src={`/images/${path}/${i}.png`}
          alt={`${path}${i}`}
          width="60px"
          height="55px"
          style={{
            transform: `scale(${scale})`,
            position: "relative",
            top,
          }}
        />
      </div>
    );
  }
  return (
    <div
      className="partList"
      style={{
        display: "flex",
        flexWrap: "wrap",
        border: "4px solid #A3E79C",
        borderRadius: 10,
        gap: 15,
        padding: 18,
        backgroundColor: "#DADADA",
      }}
    >
      {parts}
    </div>
  );
}

export default PartList;
