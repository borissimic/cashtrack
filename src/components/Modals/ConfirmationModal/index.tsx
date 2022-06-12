import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import { createPortal } from "react-dom";
import "./index.scss";

const ConfirmationModal = ({ children, onConfirm, stateHandler }: Props) => {
  const modalContanier = document.getElementById("modal-contanier");

  document.body.style.overflow = null;

  const close = () => {
    stateHandler(false);
  };

  const confirmHandler = async () => {
    await onConfirm();

    close();
  };

  const Modal = (
    <div className="modal-contanier" onClick={close}>
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <FontAwesomeIcon className="modal__cancel" icon={faX} onClick={close} />
        {children}
        <div className="modal__buttons">
          <Button className="danger" type="button" onClick={close}>
            Cancel
          </Button>
          <Button className="success" type="button" onClick={confirmHandler}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );

  return createPortal(Modal, modalContanier);
};

type Props = {
  children: any;
  onConfirm: Function;
  stateHandler: Function;
};

export default ConfirmationModal;
