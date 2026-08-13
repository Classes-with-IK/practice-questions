import { useState } from "react";

function Functional() {
  const [number, setNumber] = useState(0);

  function increaseNumber() {
    setNumber(prev => prev + 1);
  }

  function decreaseNumber() {
      setNumber(prev => prev - 1);
      
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row gap-12">
        <button
          onClick={() => decreaseNumber()}
          className="size-12 bg-red-600 text-2xl text-white">
          -
        </button>

        <p>{number}</p>

        <button
          onClick={() => increaseNumber()}
          className="size-12 bg-green-600 text-2xl text-white">
          +
        </button>
      </div>
    </div>
  );
}

export default Functional