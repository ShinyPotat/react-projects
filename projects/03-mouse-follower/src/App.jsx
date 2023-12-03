import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const pointerClassName = enabled ? "pointer" : "";

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <main className="container">
      <h1>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)} className="follow-btn">
        {enabled ? "Disable" : "Enable"} mouse follower
      </button>
      <div
        className={pointerClassName}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </main>
  );
}

export default App;
