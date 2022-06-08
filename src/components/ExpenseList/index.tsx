import { Expense, TExpense } from "models/expense.model";
import ExpenseCard from "./ExpenseCard";
import "./index.scss";
import "./ExpenseCard/index.scss";
import InputField from "components/InputField";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ExpenseList = ({ expenses, className, hasAdd }: Props) => {
  const content = expenses.map((item: TExpense) => {
    return (
      <li key={item.id}>
        <ExpenseCard expense={new Expense(item)}></ExpenseCard>
      </li>
    );
  });

  // const addCard = (
  //   <li>
  //     <article className="expense-card ">
  //       <InputField icon={faEnvelope}>
  //         <input type="text" />
  //       </InputField>
  //     </article>
  //   </li>
  // );

  return (
    <ul className={`expense-list ${className}`}>
      {/* {hasAdd && addCard} */}
      {content}
    </ul>
  );
};

type Props = {
  expenses: TExpense[];
  className?: string;
  hasAdd?: boolean;
};
export default ExpenseList;
