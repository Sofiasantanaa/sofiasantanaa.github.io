"use client";
import { useState } from "react";


// Counter Component: Demonstrates numerical state management and event handling.

export default function Counter() {
  // 1. STATE MANAGEMENT: State variable 'count' initialized to 0.
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter: {count}</h2>
      <div className="button-group">
        {/* EVENT HANDLING: Increments the 'count' state by 1 */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {/* EVENT HANDLING: Decrements the 'count' state by 1 */}
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

