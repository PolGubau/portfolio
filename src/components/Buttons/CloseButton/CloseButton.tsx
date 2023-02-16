import { GrFormClose } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeSomeProjectSelectedActionCreator } from "src/redux/features/selectedSlice";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { IProject } from "src/Interfaces";
import { colors } from "src/styles/theme";
const CloseButtonStyled = styled.div`
  position: absolute;
  right: 10px;
  z-index: 5;
  top: 10px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .button {
    padding: 5px;
    border-radius: 10px;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${colors.blue};

    color: black;
    aspect-ratio: 1/1;
    :hover {
      background-color: ${colors.darkBlue};
    }
  }
  .red {
    background-color: ${colors.lightRed};
    :hover {
      background-color: ${colors.red};
    }
  }
`;
const CloseButton = ({ project }: { project: IProject }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeSomeProjectSelectedActionCreator(false));
  };
  return (
    <CloseButtonStyled>
      <Link to={`/`} onClick={handleClick} className={"button red"}>
        <GrFormClose size={25} />
      </Link>

      {project.githubLink && (
        <a href={project.githubLink} onClick={handleClick} className={"button"}>
          <FiGithub size={18} />
        </a>
      )}

      <a
        href={project.link}
        onClick={handleClick}
        target="_blank"
        className={"button"}
      >
        <BsSearch size={15} />
      </a>
    </CloseButtonStyled>
  );
};

export default CloseButton;
