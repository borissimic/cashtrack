import ExpenseList from "components/ExpenseList";
import { TExpense } from "models/expense.model";

const ListPage = () => {
  const expenses: TExpense[] = [
    {
      id: 1,
      category: "Utility",
      name: "Electricity",
      price: 500,
      date: "01/01/1970",
    },
  ];
  return (
    <div>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default ListPage;
