import {
  faCalendar,
  faDollarSign,
  faMoneyBillTrendUp,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Expense } from "models/expense.model";
import "./index.scss";

const ExpenseCard = ({ expense }: Props) => {
  const { description, category, value, date } = expense;
  return (
    <li className="expense-card">
      <div className="expense-card__icons">
        <div className="expense-card__icons-left">
          <FontAwesomeIcon icon={faTrash} size="lg" color="gray" />
        </div>
        <div className="expense-card__icons-right">
          <FontAwesomeIcon icon={faPencil} size="lg" color="gray" />
        </div>
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
    </li>
  );
};

type Props = {
  expense: Expense;
};

export default ExpenseCard;
