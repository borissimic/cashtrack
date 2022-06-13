import {
  faCalendar,
  faDollarSign,
  faMoneyBillTrendUp,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpenseForm from "components/ExpenseForm";
import ConfirmationModal from "components/Modals/ConfirmationModal";
import GenericModal from "components/Modals/GenericModal";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { Expense, TExpense } from "models/expense.model";
import { MouseEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildUrlParams } from "utils/generic.util";
import "./index.scss";

const ExpenseCard = ({ expense: _expense }: Props) => {
  const navigate = useNavigate();
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [expense] = useState(_expense);
  const { id, description, type, value, date } = expense;
  const expensesHttp = new ExpensesHttp();
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const [isGenericModalActive, setIsGenericModalActive] = useState(false);
  const [isEditEnabled, setIsEditEnabled] = useState(true);
  const [isEditMode, setIsEditMode] = useState(isEditEnabled);
  const openDeleteModal = (event: MouseEvent) => {
    event.stopPropagation();

    setIsDeleteModalActive(true);
  };

  const deleteHandler = async () => {
    const newExpenses = expenses.filter(
      (expense: Expense) => expense.id !== id
    );

    await expensesHttp.deleteExpense(id);

    setExpenses(newExpenses);
  };

  // const editHandler = async (data: Expense) => {
  //   const newExpenses = await expensesHttp.replaceExpense({ id, ...data });
  //   setExpenses([newExpenses]);
  // };

  const openGenericeModal = (event: MouseEvent, isReadonly: boolean) => {
    event.stopPropagation();
    if (!isReadonly) {
      setIsEditEnabled(false);
      setIsGenericModalActive(true);
    }
    {
      setIsGenericModalActive(true);
    }
  };

  return (
    <>
      {isDeleteModalActive && (
        <ConfirmationModal
          onConfirm={deleteHandler}
          stateHandler={setIsDeleteModalActive}
        >
          <h2>Delete {description} ?</h2>

          <p>Are you sure you want to delete {description}? </p>
        </ConfirmationModal>
      )}
      {isGenericModalActive && (
        <GenericModal stateHandler={setIsGenericModalActive}>
          <ExpenseForm
            id={id}
            preFill={expense}
            isFormDisabled={isEditEnabled}
            editMode={isEditMode}
          ></ExpenseForm>
        </GenericModal>
      )}
      <article
        className="expense-card"
        onClick={(event) => openGenericeModal(event, true)}
      >
        <div className="expense-card__icons">
          <FontAwesomeIcon
            className="expense-card__icons-left"
            icon={faTrash}
            size="lg"
            color="gray"
            onClick={openDeleteModal}
          />

          <FontAwesomeIcon
            className="expense-card__icons-right"
            icon={faPencil}
            size="lg"
            color="gray"
            onClick={(event) => openGenericeModal(event, false)}
          />
        </div>

        <div className="expense-card__info">
          <>{type}</>
          <div>
            <FontAwesomeIcon icon={faMoneyBillTrendUp} size="lg" color="gray" />
            <span>{description}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faDollarSign} size="lg" color="gray" />
            <span>{value}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} size="lg" color="gray" />
            <span>{date}</span>
          </div>
        </div>
      </article>
    </>
  );
};

type Props = {
  expense: Expense;
};

export default ExpenseCard;
