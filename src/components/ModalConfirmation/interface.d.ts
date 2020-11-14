export interface IModalConfirmation {
  title: string;
  description?: string;
  image?: string;
  textCancel?: string;
  textConfirm?: string;
  showModal: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalConfirmationWrapper {
  showModal: boolean;
}
