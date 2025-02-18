import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBorderRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    if (cursorRef.current && cursorBorderRef.current) {
      cursorRef.current.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
      cursorBorderRef.current.style.transform = `translate(${clientX - 15}px, ${clientY - 15}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-electricBlue rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
      />
      <div
        ref={cursorBorderRef}
        className="fixed w-7 h-7 rounded-full border border-electricBlue pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out animate-pulse"
      />
    </>
  );
};