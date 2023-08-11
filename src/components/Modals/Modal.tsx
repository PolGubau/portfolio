import { ModalStyled } from "./Modal.styled";
import { Button, GenericWrapper, Text } from "src/components";
import { useRecoilValue } from "recoil";
import { modalState } from "src/Recoil/modal.state";

const Modal = () => {
  const modal = useRecoilValue(modalState);
  const { handleClose, title, children, maxWidth } = modal;

  return (
    <>
      <GenericWrapper onClick={handleClose}>
        <ModalStyled maxWidth={maxWidth}>
          {Boolean(handleClose) && (
            <Button
              className="close"
              icon="close"
              onClick={handleClose}
              type="transparent"
            />
          )}
          {Boolean(title) && (
            <header>
              <Text size={2}>{title}</Text>
            </header>
          )}
          <section className="modalContent"> {children}</section>
        </ModalStyled>
      </GenericWrapper>
    </>
  );
};

export default Modal;
