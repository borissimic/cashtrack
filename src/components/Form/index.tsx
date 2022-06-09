import { FormProvider, useForm } from "react-hook-form";
import { createClass } from "utils/generic.util";

const Form = ({ children, onSubmit, className }: Props) => {
  const methods = useForm();
  const classes = createClass(
    { submitted: methods.formState.isSubmitted },
    className
  );

  return (
    <FormProvider {...methods}>
      <form className={classes} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

type Props = {
  children: any;
  onSubmit: any;
  className?: string;
};

export default Form;
