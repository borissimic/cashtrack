import {
  faCalendar,
  faDollarSign,
  faMoneyBillTrendUp,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { Expense } from "models/expense.model";
import { MouseEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildUrlParams } from "utils/generic.util";
import "./index.scss";

const ExpenseCard = ({ expense: _expense }: Props) => {
  const navigate = useNavigate();
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [expense, setExpense] = useState(_expense);
  const { id, description, type, value, date } = expense;
  const expensesHttp = new ExpensesHttp();

  const deleteHandler = async (event: MouseEvent) => {
    event.stopPropagation();

    const newExpenses = expenses.filter(
      (expense: Expense) => expense.id !== id
    );

    await expensesHttp.deleteExpense(id);

    setExpenses(newExpenses);
  };

  const navigateHandler = (event: MouseEvent, isReadonly: boolean) => {
    event.stopPropagation();
    if (isReadonly) {
      const query = buildUrlParams({ isReadonly });

      return navigate(`/edit/${id}?${query}`);
    }
    navigate(`/edit/${id}`);
  };

  return (
    <article
      className="expense-card"
      onClick={(event) => navigateHandler(event, true)}
    >
      <div className="expense-card__icons">
        <FontAwesomeIcon
          className="expense-card__icons-left"
          icon={faTrash}
          size="lg"
          color="gray"
          onClick={deleteHandler}
        />

        <FontAwesomeIcon
          className="expense-card__icons-right"
          icon={faPencil}
          size="lg"
          color="gray"
          onClick={(event) => navigateHandler(event, false)}
        />
      </div>

      <div className="expense-card__info">
        <h3>{type}</h3>
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
  );
};

type Props = {
  expense: Expense;
};

export default ExpenseCard;
