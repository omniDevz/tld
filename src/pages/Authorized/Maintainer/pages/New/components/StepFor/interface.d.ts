
export interface StepForProps {
  handleStep: function(
    1 | 2 | 3 | 4,
    1 | 2 | 3 | 4
  );
  handleConfirmRegister: function();

  levelAccess: number;
  setLevelAccess: React.Dispatch<React.SetStateAction<number>>;
}

