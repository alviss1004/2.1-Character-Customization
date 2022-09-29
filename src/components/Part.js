import React from "react";

function Part({ path, index, zIndex }) {
  return (
    <div>
      <img
        src={`/images/${path}/${index}.png`}
        alt=""
        width={260}
        style={{ zIndex, position: "absolute", left: 0, top: 0 }}
      />
    </div>
  );
}

export default Part;
