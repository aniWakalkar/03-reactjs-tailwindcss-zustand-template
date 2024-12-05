import React from "react";
import useStore from "../zustand/store";

const Counter = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div className="h-[85vh] flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Count: <span className="text-yellow-500">{count}</span>
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
