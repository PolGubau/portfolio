import { IModalState, ModalProps, modalState } from "src/Recoil/modal.state";
import { useSetRecoilState } from "recoil";
import { useScrollLock } from "./useScrollLock";

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
    maxWidth = "500px",
  }: ModalProps): void => {
    lockScroll();
    trigger({
      isOpen: true,
      handleClose,
      children,
      title,
      maxWidth,
    });
  };

  return {
    triggerModal,
    closeModal,
  };
};

export default useModal;
