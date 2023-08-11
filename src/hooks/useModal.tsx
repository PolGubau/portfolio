import { IModalState, ModalProps, modalState } from "src/Recoil/modal.state";
import { useSetRecoilState } from "recoil";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

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
    children = (
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    ),
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
