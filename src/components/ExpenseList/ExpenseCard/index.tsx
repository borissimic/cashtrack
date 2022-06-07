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
import { useContext, useState } from "react";
import "./index.scss";

const ExpenseCard = ({ expense: _expense }: Props) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [expense, setExpense] = useState(_expense);
  const { id, description, category, value, date } = expense;
  const expensesHttp = new ExpensesHttp();

  const deleteHandler = async () => {
    const newExpenses = expenses.filter(
      (expense: Expense) => expense.id !== id
    );

    await expensesHttp.deleteExpense(id);

    setExpenses(newExpenses);
  };

  return (
    <article className="expense-card">
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
        />
      </div>

      <div className="expense-card__info">
        <h3>{category}</h3>
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
