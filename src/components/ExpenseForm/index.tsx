import { faCalendar, faDollar } from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button";
import Form from "components/Form";
import InputField from "components/InputField";
import { ExpenseType } from "constants/generic.enum";
import { ExpenseContext } from "context/expense.contex";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { TExpense } from "models/expense.model";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { validators } from "utils/generic.util";

import "./index.scss";

const ExpenseForm = ({
  id,

  className,
  preFill,
  isFormDisabled,
  editMode,
  isAddForm,
  isSubmitDone,
  closeEditModal,
}: Props) => {
  const { setExpenses } = useContext(ExpensesContext);
  const { expense, setExpense } = useContext(ExpenseContext);
  const expensesHttp = useMemo(() => new ExpensesHttp(), []);
  const navigate = useNavigate();

  const submitHandler = async (data: TExpense) => {
    if (id) {
      await expensesHttp.replaceExpense({ id, ...data });
      setExpense(await expensesHttp.getExpense(id));
      setExpenses(await expensesHttp.getExpenses());
      closeEditModal(false);
      navigate("/");
    } else {
      await expensesHttp.createExpense(data);
      setExpenses(await expensesHttp.getExpenses());
    }
  };

  console.log(expense);
  return (
    <Form
      onSubmit={submitHandler}
      className="expense-form"
      preFill={preFill}
      isDisabled={isFormDisabled}
      isAddForm={isAddForm}
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

      {!isAddForm && <Button className="m-b-20">Submit</Button>}
    </Form>
  );
};

type Props = {
  className?: string;
  id?: number;
  preFill?: any;
  isFormDisabled?: boolean;
  editMode?: boolean;
  isAddForm?: boolean;
  isSubmitDone?: any;
  closeEditModal?: any;
};

export default ExpenseForm;
