import React from "react";
import Part from "./Part";

function Avatar({
  bodyIndex,
  eyeIndex,
  hairIndex,
  mouthIndex,
  eyebrowIndex,
  hatIndex,
  glassesIndex,
  clothing1Index,
  clothing2Index,
  clothing3Index,
}) {
  return (
    <div style={{ width: "260px", height: "280px", position: "relative" }}>
      <Part path="body" index={bodyIndex} zIndex={0} />
      <Part path="eyes" index={eyeIndex} zIndex={1} />
      <Part path="hair" index={hairIndex} zIndex={6} />
      <Part path="mouths" index={mouthIndex} zIndex={5} />
      <Part path="eyebrows" index={eyebrowIndex} zIndex={4} />
      <Part path="/accessories/hats" index={hatIndex} zIndex={7} />
      <Part path="/accessories/glasses" index={glassesIndex} zIndex={5} />
      <Part path="clothes/layer_1" index={clothing1Index} zIndex={2} />
      <Part path="clothes/layer_2" index={clothing2Index} zIndex={3} />
      <Part path="clothes/layer_3" index={clothing3Index} zIndex={4} />
    </div>
  );
}

export default Avatar;
