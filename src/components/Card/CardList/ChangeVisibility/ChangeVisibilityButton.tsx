import { relevantProjects, allProjects } from "src/utils/textsUtils";
import useFilter from "src/hooks/useFilter";
import { CVBStyled } from "./Styled";
import { TbEye, TbEyeOff } from "react-icons/tb";

const ChangeVisibilityButton = () => {
  const filter = useFilter();
  const { projects, resetShowingListToAll, resetShowingListToRelevant } =
    filter;

  return (
    <CVBStyled>
      {/* if you are in the relevant projects, click on the button to show all projects, otherwise click on the button to show the relevant projects */}

      {projects.toShow === relevantProjects ? (
        <button onClick={resetShowingListToAll}>
          <TbEye />
          {`Show all ${allProjects.length} projects`}
        </button>
      ) : (
        <button onClick={resetShowingListToRelevant}>
          <TbEyeOff />
          Show only relevant projects
        </button>
      )}
    </CVBStyled>
  );
};
export default ChangeVisibilityButton;
