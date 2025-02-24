import { Link } from 'react-router-dom';

export interface LabelProps {
  type: string;
}

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
  onChange?: FunctionComponentElement;
  type?: 'textarea' | 'text' | 'number' | 'date' | 'email' | string;
  prefix?: string;
  maxlength?: number;
  handleListInPressKey?: Array<{
    handleFunction: () => void,
    key: 'Enter' | string,
  }>;
}
