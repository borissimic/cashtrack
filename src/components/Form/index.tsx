import { CustomFormProvider } from "context/custom-form.context";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createClass } from "utils/generic.util";

const Form = ({
  children,
  onSubmit,
  className,
  preFill,
  isDisabled,
}: Props) => {
  const methods = useForm();

  const classes = createClass(
    { submitted: methods.formState?.isSubmitted },
    className
  );

  useEffect(() => methods.reset(preFill), [preFill, methods]);

  return (
    <CustomFormProvider isDisabled={isDisabled} methods={methods}>
      <form className={classes} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </CustomFormProvider>
  );
};

type Props = {
  children: any;
  onSubmit: any;
  className?: string;
  preFill?: any;
  isDisabled?: boolean;
};

export default Form;
