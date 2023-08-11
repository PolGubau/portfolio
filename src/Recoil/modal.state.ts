import { atom } from "recoil";

export interface ModalProps {
  handleClose?: () => void;
  children?: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
  maxWidth?: string;
}

export interface IModalState extends ModalProps {
  isOpen: boolean;
}
const initialState: IModalState = {
  isOpen: true,
  handleClose: () => {},
  children: null,
  title: "",
  footer: null,
  maxWidth: "500px",
};

export const modalState = atom<IModalState>({
  key: "modalState1",
  default: initialState,
});
