import { faUser } from "@fortawesome/free-solid-svg-icons";
import InputField from "components/InputField";
import { validators } from "utils/generic.util";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { parseUrlParamas } from "utils/generic.util";
import Form from "components/Form";
import ExpensesHttp from "http/expenses.http";
import { TExpense } from "models/expense.model";
import { useCallback, useMemo, useState } from "react";
import { useEffect } from "react";

const EditPage = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const { isReadonly } = parseUrlParamas(search);
  const navigate = useNavigate();
  const [expense, setExpense] = useState(null);
  const expensesHttp = useMemo(() => new ExpensesHttp(), []);
  enum ExpenseType {
    FOOD = "Hrana",
    UTILITES = "Režije",
    TRANSPORT = "Prijevoz",
    CLOTHING = "Odjeca",
    OTHER = "Ostalo",
  }

  const submitHandler = async (data: TExpense) => {
    if (id) {
      await expensesHttp.replaceExpense({ id, ...data });
    } else {
      await expensesHttp.createExpense(data);
    }
    navigate("/");
  };

  const fetchExpense = useCallback(async () => {
    const expense = await expensesHttp.getExpense(+id);

    setExpense(expense);
  }, [expensesHttp, id]);

  useEffect(() => {
    if (id) {
      fetchExpense();
    }
  }, [fetchExpense, id]);

  return (
    <Form onSubmit={submitHandler} preFill={expense}>
      <InputField
        className="w-px-150"
        label="Expense type"
        icon={faUser}
        isDisabled={!!isReadonly}
        formControl={[
          "type",
          validators({
            required: true,
            maxLength: 10,
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
        className="w-px-150"
        label="Expense description"
        icon={faUser}
        isDisabled={!!isReadonly}
        formControl={[
          "description",
          validators({
            required: true,
            maxLength: 10,
          }),
        ]}
      >
        <input type="text" placeholder="first name" />
      </InputField>
      <InputField
        className="w-px-150"
        label="Expense value"
        icon={faUser}
        isDisabled={!!isReadonly}
        formControl={[
          "value",
          validators({
            required: true,
            maxLength: 10,
          }),
        ]}
      >
        <input type="text" placeholder="first name" />
      </InputField>
      <InputField
        className="w-px-150"
        label="Expense date"
        icon={faUser}
        isDisabled={!!isReadonly}
        formControl={[
          "date",
          validators({
            required: true,
            maxLength: 10,
          }),
        ]}
      >
        <input type="text" placeholder="first name" />
      </InputField>
      <button>Submit</button>
    </Form>
  );
};

export default EditPage;
