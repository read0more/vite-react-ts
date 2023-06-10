import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import styled from "styled-components";
import { X } from "react-feather";

const Handle = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: grab;

  > div {
    width: 40px;
    height: 4px;
    border-radius: 17px;
    background-color: #cccccc;
    margin: auto;
    margin-top: 8px;
    z-index: 2;
  }
`;

const StyledBottomSheet = styled.div<{
  height: number;
}>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => `${height}px` || "auto"};
  border-radius: 16px 16px 0px 0px;
  background-color: #ffffff;
`;

const CLOSE_BOTTOM_SHEET_DISTANCE = 100;
function BottomSheet({ children, closeModal, height }: {
  children: ReactNode;
  closeModal: () => void;
  height: number;
}) {
  const handleDragEnd = (_: unknown, dragData:  { x: number; y: number }) => {
    if (dragData.y >= CLOSE_BOTTOM_SHEET_DISTANCE) {
      closeModal();
      return false;
    }
  };

  return (
    <Draggable
      handle='.handle'
      axis='y'
      bounds={{ top: 0 }}
      onStop={handleDragEnd}
    >
      <StyledBottomSheet height={height}>
        <Handle className='handle'>
          <div />
        </Handle>
        {children}
      </StyledBottomSheet>
    </Draggable>
  );
}

const StyledFullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 1000;
`;

function FullScreen({ children }: { children: ReactNode }) {
  return <StyledFullScreen>{children}</StyledFullScreen>;
}

const StyledCloseButton = styled(X)`
  position: absolute;
  top: 17px;
  right: 17px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
function CloseButton({ onClick }: { onClick: () => void }) {
  return <StyledCloseButton size={16} onClick={onClick} />;
}

const StyledDimBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

function DimBody({ closeModal }: { closeModal: () => void }) {
  return <StyledDimBody onClick={closeModal} />;
}

function Modal({ children, isOpen }: { children: ReactNode; isOpen: boolean }) {
  const portal = document.getElementById("portal");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "unset";
  }, [isOpen]);

  return isOpen && portal ? createPortal(<div>{children}</div>, portal) : null;
}

Modal.Title = styled.div``;
Modal.BottomSheet = BottomSheet;
Modal.DimBody = DimBody;
Modal.FullScreen = FullScreen;
Modal.CloseButton = CloseButton;

export default Modal;
