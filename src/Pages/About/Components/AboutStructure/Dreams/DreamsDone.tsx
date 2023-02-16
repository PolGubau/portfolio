import { DreamsStyled } from "./DreamsStyled";
import EachDream from "./EachDream/EachDream";
import useMedia from "src/hooks/useMedia";
import { breakpoints } from "src/styles/theme";
import { DreamsList } from "./DreamList";

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
