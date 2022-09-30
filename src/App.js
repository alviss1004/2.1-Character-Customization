import React, { useState, useEffect } from "react";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";
import "./App.css";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(1);
  const [eye, setEye] = useState(1);
  const [hair, setHair] = useState(1);
  const [mouth, setMouth] = useState(1);
  const [eyebrows, setEyebrows] = useState(1);
  const [hat, setHat] = useState(1);
  const [glasses, setGlasses] = useState(1);
  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(1);
  const [clothing3, setClothing3] = useState(1);

  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEye(Math.floor(Math.random() * total.eyes));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setHat(Math.floor(Math.random() * total.hat));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <>
      <h1
        style={{
          fontSize: 50,
          textShadow: "2px 2px #EE4D8D",
          textAlign: "center",
          color: "#3BD5DB",
        }}
      >
        Character Customization
      </h1>
      <div
        style={{
          width: "50%",
          borderBottom: "4px solid rgba(255, 41, 41, 0.555)",
          margin: "auto",
          marginBottom: 5,
        }}
      ></div>
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <div className="avatar-container">
          <Avatar
            bodyIndex={body}
            eyeIndex={eye}
            hairIndex={hair}
            mouthIndex={mouth}
            eyebrowIndex={eyebrows}
            hatIndex={hat}
            glassesIndex={glasses}
            clothing1Index={clothing1}
            clothing2Index={clothing2}
            clothing3Index={clothing3}
          />
          <div style={{ textAlign: "center" }}>
            <button onClick={randomize} className="button">
              Randomize
            </button>
          </div>
        </div>
        <div
          className="partListContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",
          }}
        >
          <h2>Body</h2>
          <PartList
            total={total.body}
            path="body"
            method={setBody}
            selected={body}
          />
          <h2>Eyes</h2>
          <PartList
            total={total.eyes}
            path="eyes"
            method={setEye}
            selected={eye}
          />
          <h2>Hair</h2>
          <PartList
            total={total.hair}
            path="hair"
            method={setHair}
            selected={hair}
          />
          <h2>Mouths</h2>
          <PartList
            total={total.mouth}
            path="mouths"
            method={setMouth}
            selected={mouth}
          />
          <h2>Eyebrows</h2>
          <PartList
            total={total.eyebrows}
            path="eyebrows"
            method={setEyebrows}
            selected={eyebrows}
          />
          <h2>Hats</h2>
          <PartList
            total={total.hat}
            path="/accessories/hats"
            method={setHat}
            selected={hat}
          />
          <h2>Glasses</h2>
          <PartList
            total={total.glasses}
            path="/accessories/glasses"
            method={setGlasses}
            selected={glasses}
          />
          <h2>Clothing 1</h2>
          <PartList
            total={total.clothing1}
            path="clothes/layer_1"
            method={setClothing1}
            selected={clothing1}
          />
          <h2>Clothing 2</h2>
          <PartList
            total={total.clothing2}
            path="clothes/layer_2"
            method={setClothing2}
            selected={clothing2}
          />
          <h2>Clothing 3</h2>
          <PartList
            total={total.clothing3}
            path="clothes/layer_3"
            method={setClothing3}
            selected={clothing3}
            scale={2}
            top={-30}
          />
        </div>
      </div>
    </>
  );
}

export default App;
