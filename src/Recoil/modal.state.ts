import { ModalProps } from "pol-ui";
import { atom } from "recoil";

export interface IModalState extends ModalProps {
  isOpen: boolean;
}
const initialState: IModalState = {
  isOpen: false,
};

export const modalState = atom<ModalProps>({
  key: "modalState1",
  default: initialState,
});
