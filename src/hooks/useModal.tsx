import { IModalState, ModalProps, modalState } from "src/Recoil/modal.state";
import { useSetRecoilState } from "recoil";

const useModal = () => {
  const trigger = useSetRecoilState<IModalState>(modalState);

  const closeModal = (): void => {
    trigger({
      isOpen: false,
    });
  };

  const closeModalAndGoHome = (): void => {
    closeModal();
  };
  const triggerModal = ({
    handleClose = closeModalAndGoHome,
    children,
    title,
    maxWidth = "500px",
  }: ModalProps): void => {
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
