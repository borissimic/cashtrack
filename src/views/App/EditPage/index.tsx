import { faUser } from "@fortawesome/free-solid-svg-icons";
import InputField from "components/InputField";
import { validators } from "utils/generic.util";
import { useLocation, useParams } from "react-router-dom";
import { parseUrlParamas } from "utils/generic.util";
import Form from "components/Form";
import ExpensesHttp from "http/expenses.http";

const EditPage = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const { isReadonly } = parseUrlParamas(search);
  const expensesHttp = new ExpensesHttp();

  const submitHandler = async (data: any) => {
    if (id) {
      await expensesHttp.replaceExpense({ id, ...data });
    } else {
      await expensesHttp.createExpense(data);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
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
            pattern: /[x]/,
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
