import { GrFormClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeSomeProjectSelectedActionCreator } from "src/redux/features/selectedSlice";
import styled from "styled-components";
const CloseButtonStyled = styled.div`
  .closeButton {
    user-select: none;
    position: absolute;
    right: 0px;
    z-index: 5;
    top: 0px;
    box-sizing: content-box;
    aspect-ratio: 1/1;
    padding: 5px;
    color: var(--black);
    display: flex;
    background-color: var(--primary);
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 10px;
    :hover {
      background-color: var(--primary-dark);
    }
  }
`;
const CloseButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeSomeProjectSelectedActionCreator(false));
  };
  return (
    <CloseButtonStyled>
      <Link to={`/`} onClick={handleClick}>
        <GrFormClose className="closeButton" size={25} />
      </Link>
    </CloseButtonStyled>
  );
};

export default CloseButton;
