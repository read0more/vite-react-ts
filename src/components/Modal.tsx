import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Title({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

const fixedBottomHeight = 150;
function FixedBottom({ children, transition }: { children: ReactNode, transition?: boolean }) {
  const [bottom, setBottom] = useState(-fixedBottomHeight);

  useEffect(() => {
    setBottom(0);
  }, []);
  
  return (
    <div
      style={{
        position: "fixed",
        bottom: bottom,
        left: 0,
        right: 0,
        height: fixedBottomHeight,
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        transition: transition ? `bottom 0.3s ease-in-out` : "none",
      }}
    >
      {children}
    </div>
  );
}

function FullScreen({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        zIndex: 100,
        transition: "bottom 0.3s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        width: 30,
        height: 30,
        borderRadius: "50%",
        backgroundColor: "white",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      X
    </button>
  );
}

function DimBody({ onClick }: { onClick?: () => void}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={onClick}
    ></div>
  );
}

function Modal({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) {
  const portal = document.getElementById("portal");
  if (!portal) return null;

  return isOpen
    ? createPortal(
        <div>
          {children}
        </div>,
        portal
      )
    : null;
}

Modal.Title = Title;
Modal.FixedBottom = FixedBottom;
Modal.DimBody = DimBody;
Modal.FullScreen = FullScreen;
Modal.CloseButton = CloseButton;

export default Modal;
