export interface CheckButtonProps {
  label: string;
  name: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}
