"use client";

import { useState, useCallback } from "react";

const Overlay = ({ onClick }) => {
  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 opacity-50"
      onClick={onClick}
      style={{
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`,
      }}
    />
  );
};

export default function StackingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Overlay
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}
      <div className="relative">
        <button onClick={toggle}>{isOpen ? "Close" : "Open"}</button>
        {isOpen && <StackingButton />}
      </div>
    </>
  );
}
