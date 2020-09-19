import { Link } from 'react-router-dom';

export interface InputProps {
  hasValue: boolean;
  hasChildren: boolean;
}

export interface TextProps {
  type: string;
  hasLabel: boolean;
}

export interface FormFieldProps {
  value: string;
  name: string;
  label: string;
  onChange: FunctionComponentElement;
  type?: string;
  prefix?: string;
}
