import { FiMoreVertical } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { OptionsAtom } from "src/Recoil/Atoms/OptionsAtom";
import { ButtonStyled } from "../Styles/RightButtonsStyled";

const OptionsButtons = () => {
  const [options, setOptions] = useRecoilState(OptionsAtom);
  return (
    <ButtonStyled
      onClick={() => {
        setOptions({ show: !options.show });
      }}
    >
      <FiMoreVertical />
    </ButtonStyled>
  );
};

export default OptionsButtons;
