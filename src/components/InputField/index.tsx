import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cloneElement } from "react";
import { useForm } from "react-hook-form";
import { createClass } from "utils/generic.util";
import "./index.scss";

const InputField = ({
  label = "",
  className = "",
  icon,
  children,
  isDisabled = false,
  formControl = [],
}: Props) => {
  const defaultProps = { disabled: isDisabled };
  const { register } = useForm();
  const [id, validators] = formControl;
  const props = formControl.length
    ? { ...defaultProps, ...register(id, validators) }
    : defaultProps;

  const content = cloneElement(children, props);

  const classes: any = createClass({ disabled: isDisabled }, className);

  const createContent = () => {
    const props: any = content.props;
    if (isDisabled) {
      return props.value || "N/A";
    }
    return content;
  };

  return (
    <div className={`input-field ${classes}`}>
      <label className="input-field__label" htmlFor={id}>
        {label}
      </label>
      <div className="input-field__input">
        <FontAwesomeIcon className="m-r-5" icon={icon} />
        {createContent()}
      </div>
      <span className="input-field__error">Error message</span>
    </div>
  );
};

type Props = {
  label?: string;
  className?: string;
  children: any;
  icon?: any;
  isDisabled?: boolean;
  formControl?: any[];
};

export default InputField;
