"use client";
import { useState } from "react";


// ToggleMessage Component: Demonstrates simple state management and conditional rendering.
export default function ToggleMessage() {
  // 1. STATE MANAGEMENT: Boolean state to control the visibility of the message.
  const [visible, setVisible] = useState(false);

  return (
    <div className="card">
      {/* EVENT HANDLING: The 'onClick' handler toggles the 'visible' state */}
      <button onClick={() => setVisible(!visible)}>
        {/* CONDITIONAL RENDERING: Changes button text based on the 'visible' state */}
        {visible ? "Hide Message" : "Show Message"}
      </button>
      {/* CONDITIONAL RENDERING: The paragraph is only displayed when 'visible' is true */}
      {visible && <p className="message">My interest in the world of technology began thanks to my close friends who work in this field. Seeing how technology can transform ideas and
        problems into solutions sparked my interest in learning programming and participating in projects that make a real difference.</p>}
    </div>
  );
}
