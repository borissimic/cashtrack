import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLOR_DANGER, COLOR_PRIMARY } from "constants/colors.constants";
import { CustomFormContext } from "context/custom-form.context";
import { cloneElement, useContext } from "react";

import { createClass } from "utils/generic.util";
import "./index.scss";

const InputField = ({
  label = "",
  className = "",
  icon,
  children,

  formControl = [],
}: Props) => {
  const { disabled, ...methods } = useContext(CustomFormContext);
  const defaultProps = { disabled };
  const [id, validators] = formControl;
  const props = formControl.length
    ? { ...defaultProps, ...methods?.register(id, validators) }
    : defaultProps;
  const errorMessage = methods?.formState?.errors[id]?.message;

  const content = cloneElement(children, props);

  const classes = createClass({ disabled }, className);

  const createContent = () => {
    if (disabled) {
      const value = methods?.getValues(id);
      return value || "N/A";
    }
    return content;
  };

  return (
    <div className={`input-field ${classes}`}>
      <label className="input-field__label" htmlFor={id}>
        {label}
      </label>
      <div className="input-field__input">
        <FontAwesomeIcon
          className="m-r-5"
          icon={icon}
          color={errorMessage ? COLOR_DANGER : COLOR_PRIMARY}
        />
        {createContent()}
      </div>
      <span className="input-field__error">{errorMessage}</span>
    </div>
  );
};

type Props = {
  label?: string;
  className?: string;
  children: any;
  icon?: IconProp;
  isDisabled?: boolean;
  formControl?: any[];
};

export default InputField;
