import  { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">React Counter</h1>
      <h2 className="text-6xl font-mono font-semibold mb-8">{count}</h2>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-2 rounded-xl shadow hover:bg-red-600 transition"
        >
          -
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-6 py-2 rounded-xl shadow hover:bg-gray-600 transition"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-6 py-2 rounded-xl shadow hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
