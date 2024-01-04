import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ openDiag, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (openDiag) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [openDiag]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {openDiag ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
