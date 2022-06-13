import { Expense } from "models/expense.model";
import "./index.scss";

const GenericModal = ({
  children,
  expenseid,
  onConfirm,
  stateHandler,
}: Props) => {
  return <div>{children}</div>;
};

type Props = {
  children?: any;
  expenseid?: number;
  onConfirm?: Function;
  stateHandler: Function;
};

export default GenericModal;
