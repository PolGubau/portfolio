import { IModalState, modalState } from "src/Recoil/modal.state";
import { useSetRecoilState } from "recoil";
import { useScrollLock } from "./useScrollLock";
import { ModalProps } from "pol-ui";

const useModal = () => {
  const trigger = useSetRecoilState<IModalState>(modalState);
  const { lockScroll, unlockScroll } = useScrollLock();

  const closeModal = (): void => {
    trigger({
      isOpen: false,
    });
  };

  const closeModalAndGoHome = (): void => {
    unlockScroll();
    closeModal();
  };
  const triggerModal = ({
    handleClose = closeModalAndGoHome,
    children,
    title,
  }: ModalProps): void => {
    lockScroll();
    trigger({
      isOpen: true,
      padding: "none",
      handleClose,
      children: children,
      title,
    });
  };

  return {
    triggerModal,
    closeModal,
  };
};

export default useModal;
