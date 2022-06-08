import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import InputField from "components/InputField";
import "./index.scss";

const ExpenseForm = ({ className }: Props) => {
  return (
    <li>
      <article className={`expense-form ${className}`}>
        <InputField icon={faEnvelope}>
          <select />
        </InputField>
        <InputField icon={faEnvelope}>
          <textarea />
        </InputField>
        <InputField icon={faEnvelope}>
          <input type="text" />
        </InputField>
      </article>
    </li>
  );
};

type Props = {
  className?: string;
};

export default ExpenseForm;
