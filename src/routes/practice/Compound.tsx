import Modal from "@/components/Modal";
import React, { useState } from "react";

export default function Compound() {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModal1IsOpen(!modal1IsOpen)}>
        Toggle modal1
      </button>
      <button onClick={() => setModal2IsOpen(!modal2IsOpen)}>
        Toggle modal2
      </button>
      <Modal isOpen={modal1IsOpen}>
        <Modal.FullScreen>
          <Modal.Title>
            <h2 style={{ color: "cyan" }}>TITLE</h2>
          </Modal.Title>
          <Modal.CloseButton onClick={() => setModal1IsOpen(false)} />
        </Modal.FullScreen>
      </Modal>
      <Modal isOpen={modal2IsOpen}>
        <Modal.DimBody closeModal={() => setModal2IsOpen(false)}/>
        <Modal.BottomSheet closeModal={() => setModal2IsOpen(false)} height={150}>
          <Modal.Title>TITLE</Modal.Title>
          <Modal.CloseButton onClick={() => setModal2IsOpen(false)} />
        </Modal.BottomSheet>
      </Modal>
    </>
  );
}
