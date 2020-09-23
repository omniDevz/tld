export interface ButtonProps {
  color: 'primary' | 'primary-outline' | 'secondary' | 'secondary-outline';
  onClick?: function();
  to?: string;
  title?: string;
  disabled?: boolean = false;
}
