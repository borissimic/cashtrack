import { faCalendar, faDollar } from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button";
import Form from "components/Form";
import InputField from "components/InputField";
import { ExpensesContext } from "context/expenses.context";
import { METHODS } from "http";
import ExpensesHttp from "http/expenses.http";
import { TExpense } from "models/expense.model";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { validators } from "utils/generic.util";

import "./index.scss";

enum ExpenseType {
  FOOD = "Hrana",
  UTILITES = "Režije",
  TRANSPORT = "Prijevoz",
  CLOTHING = "Odjeca",
  OTHER = "Ostalo",
}

const ExpenseForm = ({
  id,
  className,
  preFill,
  isFormDisabled,
  editMode,
}: Props) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  // const [expense, setExpense] = useState(null);
  const expensesHttp = useMemo(() => new ExpensesHttp(), []);

  const submitHandler = async (data: TExpense) => {
    if (id) {
      await expensesHttp.replaceExpense({ id, ...data });
      setExpenses(await expensesHttp.getExpenses());
    } else {
      await expensesHttp.createExpense(data);
      setExpenses(await expensesHttp.getExpenses());
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      className="expense-form"
      preFill={preFill}
      isDisabled={isFormDisabled}
    >
      <h3 className="expense-form__title">Add new Expense</h3>
      <InputField
        label="Expense type"
        formControl={[
          "type",
          validators({
            required: true,
          }),
        ]}
      >
        <select className="expense-form__select">
          <option hidden>Select Expense Type</option>
          {Object.keys(ExpenseType).map((key) => (
            <option key={key} value={key}>
              {ExpenseType[key as keyof typeof ExpenseType]}
            </option>
          ))}
        </select>
      </InputField>
      <InputField
        label="Expense description"
        formControl={[
          "description",
          validators({
            required: true,
          }),
        ]}
      >
        <textarea className="expense-form__textarea"></textarea>
      </InputField>

      <InputField
        label="Expense value"
        icon={faDollar}
        formControl={[
          "value",
          validators({
            required: true,
          }),
        ]}
      >
        <input type="text" />
      </InputField>
      <InputField
        label="Expense date"
        icon={faCalendar}
        formControl={[
          "date",
          validators({
            required: true,
          }),
        ]}
      >
        <input type="date" defaultValue={""} />
      </InputField>

      {!isFormDisabled && <Button className="m-b-20">Submit</Button>}
    </Form>
  );
};

type Props = {
  className?: string;
  id?: number;
  preFill?: any;
  isFormDisabled?: boolean;
  editMode?: boolean;
};

export default ExpenseForm;
