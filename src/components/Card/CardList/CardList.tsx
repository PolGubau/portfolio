import { useState } from "react";
import { useParams } from "react-router-dom";
import { cardData } from "src/Data";
import useMedia from "src/hooks/useMedia";
import Nav from "src/components/Nav/Nav";

import NotFoundNav from "./NotFoundNav/NotFoundNav";
import ButtonsOnTop from "src/components/Buttons/ButtonsOnTop/ScrollButtons";
import { breakpoints } from "src/styles/theme";
import CentralActionsButtons from "src/components/Buttons/ButtonsOnTop/CentralActionsButtons";
import { CardListStyled, ContentStyled } from "./CardListStyled";
import { OpenedCard } from "../Card/OpenedCard/OpenedCard";
import { ClosedCard } from "../Card/ClosedCard/ClosedCard";
import { thereIsAProjectSelected } from "src/redux/features/selectedSlice";
import { useAppSelector } from "src/redux/app/hooks";
import { getInputValue } from "src/redux/features/searchInputSlice";

const List = () => {
  const inputValue = useAppSelector(getInputValue);
  const [value, setValue] = useState(inputValue);

  const { path } = useParams();

  const ids = cardData.map((project) => project.id);
  const [shown, setShown] = useState(cardData);
  console.log("Algo enseñado", useAppSelector(thereIsAProjectSelected));

  const resetFilters = () => {
    setValue("");
    setShown(cardData);
  };

  return (
    <ContentStyled>
      {!useAppSelector(thereIsAProjectSelected) && <ButtonsOnTop />}
      <Nav
        filter={shown}
        setFilter={setShown}
      />
      {shown.length === 0 && (
        <NotFoundNav resetFilters={resetFilters} value={value} />
      )}
      <CardListStyled>
        {shown.map((card, index) =>
          path === card.path ? (
            <OpenedCard key={card.id} project={card} ids={ids} />
          ) : (
            <ClosedCard key={card.id} index={index} project={card} ids={ids} />
          )
        )}
      </CardListStyled>
      <CentralActionsButtons />
    </ContentStyled>
  );
};

export default List;
