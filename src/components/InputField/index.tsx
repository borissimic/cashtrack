import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const InputField = ({ icon, children }: Props) => {
  return (
    <div className="input-field">
      <FontAwesomeIcon className="m-r-5" icon={icon} />
      {children}
    </div>
  );
};

type Props = {
  children: any;
  icon?: any;
};

export default InputField;
