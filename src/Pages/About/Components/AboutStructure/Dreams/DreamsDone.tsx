import { DreamsStyled } from "./DreamsStyled";
import EachDream from "./EachDream/EachDream";
import useMedia from "src/hooks/useMedia";
import { DreamsList } from "./DreamList";
import { baseTheme } from "src/styles/theme/baseTheme";
const breakpoints = baseTheme.breakpoints;

const Dreamsstatus = () => {
  const smallerThanTablet = useMedia(breakpoints.tablet);

  return (
    <DreamsStyled smallerThanTablet={smallerThanTablet}>
      <h3>Dreams I've archieved</h3>
      <ul>
        {DreamsList.map((dream) => (
          <EachDream dream={dream} key={dream.id} />
        ))}
      </ul>
    </DreamsStyled>
  );
};

export default Dreamsstatus;
