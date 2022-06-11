import { createContext, useState } from "react";
import { FormProvider } from "react-hook-form";

const CustomFormContext = createContext({
  disabled: false,
  setDisabled: (isDisabled: boolean) => {},
} as any);

const CustomFormProvider = ({ isDisabled, children, methods }: Props) => {
  const [disabled, setDisabled] = useState(isDisabled);

  return (
    <CustomFormContext.Provider value={{ disabled, setDisabled, ...methods }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </CustomFormContext.Provider>
  );
};

type Props = {
  isDisabled?: boolean;
  children: any;
  methods: any;
};
export { CustomFormContext, CustomFormProvider };
