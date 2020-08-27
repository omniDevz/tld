export interface FormFieldProps {
  value: string;
  name: string;
  label: string;
  type?: string;
  onChange: FunctionComponentElement;
}

export interface FormFieldWrapperProps {
  hasValue: boolean;
}
