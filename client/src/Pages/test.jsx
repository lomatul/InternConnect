import React, { useState } from "react";
import "../components/modal/Modal.css"
import Modal from "../components/modal/modal";

function TestModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="Test">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default TestModal;