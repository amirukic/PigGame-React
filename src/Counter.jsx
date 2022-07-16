import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);
  const [color, setColor] = useState("cold");

  const povecano = () => {
    const novaTemp = counter + 1;

    if (novaTemp >= 15) {
      setColor("hot");
    }

    setCounter(novaTemp);
  };
  const smanjeno = () => {
    const novaTemp = counter - 1;
    if (novaTemp < 15) {
      setColor("cold");
    }
    setCounter(novaTemp);
  };

  return (
    <div className="main">
      <div className={`temp ${color} `}>{counter}`C</div>
      <div className="pod">
        <div
          className="plus"
          onClick={() => {
            smanjeno();
          }}
        >
          -
        </div>
        <div
          className="plus"
          onClick={() => {
            povecano();
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Counter;
