import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import ExpenseForm from "components/ExpenseForm";

import { createPortal } from "react-dom";
import "./index.scss";

const GenericModal = ({
  id,
  preFill,
  isFormDisabled,
  onConfirm,
  isAddForm,
  stateHandler,
  editMode,
}: Props) => {
  const modalContanier = document.getElementById("modal-contanier");
  document.body.style.overflow = null;

  const close = () => {
    stateHandler(false);
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
        {
          <ExpenseForm
            id={id}
            preFill={preFill}
            isFormDisabled={isFormDisabled}
            editMode={editMode}
            isAddForm={isAddForm}
            closeEditModal={stateHandler}
          ></ExpenseForm>
        }
        <div className="modal__buttons">
          <Button className="danger" type="button" onClick={close}>
            Cancel
          </Button>
        </div>
      </div>
      ;
    </div>
  );

  return createPortal(Modal, modalContanier);
};

type Props = {
  children?: any;
  onConfirm?: any;
  stateHandler: Function;
  id?: number;
  preFill?: any;
  isFormDisabled?: boolean;
  editMode?: boolean;
  isAddForm?: any;
};

export default GenericModal;
