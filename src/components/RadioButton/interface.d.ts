export interface OptionProps {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  options: {
    label: string;
    value: string;
  }[];
  name: string;
  value: string;
  onChange?: FunctionComponentElement;
}
