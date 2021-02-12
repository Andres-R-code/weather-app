import { useState } from "react";

const Temp = ({ tempC, tempF }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  return (
    <div>
      <h5>
        {isCelsius ? tempC : tempF} {isCelsius ? "C" : "F"}{" "}
      </h5>
      <button onClick={() => setIsCelsius(!isCelsius)}> Degrees C/F </button>
    </div>
  );
};

export default Temp;
