'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hook';
import { increment, decrement, set } from '../store/features/counterSlice';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Counter: {count}</h1>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => dispatch(set(0))}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
