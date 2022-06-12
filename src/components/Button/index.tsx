import "./index.scss";

const Button = ({ children, ...remaningProps }: Props) => {
  return <button {...remaningProps}>{children}</button>;
};

type Props = {
  children: any;
  [x: string]: any;
};

export default Button;
