import { useEffect, useState } from "react";

function CursorGradient() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // trackes current mouse position
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        top: mousePos.y - 430,
        left: mousePos.x - 430,
        background: `radial-gradient(2000px, rgba(16, 185, 129, 0.15),  transparent 20%)`,
      }}
      className={`pointer-events-none fixed inset-0 top-0 z-20 h-[50rem] w-[50rem] rounded-full opacity-0 lg:dark:opacity-75`}
    ></div>
  );
}

export default CursorGradient;
