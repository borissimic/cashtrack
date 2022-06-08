import { faUser } from "@fortawesome/free-solid-svg-icons";
import InputField from "components/InputField";
import { validators } from "utils/generic.util";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { parseUrlParamas } from "utils/generic.util";

const EditPage = () => {
  const params = useParams();
  const { search } = useLocation();
  const { isReadonly } = parseUrlParamas(search);
  const { register, handleSubmit, formState } = useForm();

  const submitHandler = (data: any) => {
    console.log("Submitted", { data, formState });
  };
  setInterval(() => console.log(formState.errors), 3000);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
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
    </form>
  );
};

export default EditPage;
