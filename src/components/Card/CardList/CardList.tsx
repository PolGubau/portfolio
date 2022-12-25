import { useContext, useState } from "react";
import { Card } from "src/components/Card/Card/Card";
import { Route, Routes, useParams } from "react-router-dom";
import { cardData } from "src/Data";
import "./CardList.css";
import useMedia from "src/hooks/useMedia";
import Nav from "src/components/Nav/Nav";

import NotFoundNav from "./NotFoundNav/NotFoundNav";
import About from "src/Pages/About/About";
import ButtonsOnTop from "src/components/ButtonsOnTop/ButtonsOnTop";
import styled from "styled-components";
import { breakpoints, breakpointsString } from "src/styles/theme";

export const ContentStyled = styled.section`
  border-top: 1px solid var(--greyDark);
  @media only screen and (max-width: ${breakpointsString.tablet}) {
    border: none;
  }
`;
const List = () => {
  let inputSearch = "";
  const [value, setValue] = useState("");

  const mobile = useMedia(breakpoints.tablet);
  const { path } = useParams();

  const ids = cardData.map((project) => project.id);

  const [filter, setFilter] = useState(cardData);
  const actualProjects = filter;

  const resetFilters = () => {
    setValue("");
    setFilter(cardData);
  };

  return (
    <ContentStyled>
      <ButtonsOnTop />
      <Nav
        value={value}
        setValue={setValue}
        filter={filter}
        setFilter={setFilter}
        allData={cardData}
        inputSearch={inputSearch}
      />
      {actualProjects.length === 0 && (
        <NotFoundNav resetFilters={resetFilters} value={value} />
      )}
      <ul className="card-list">
        {actualProjects.map((card, index) => (
          <Card
            key={card.id}
            allData={cardData}
            index={index}
            project={card}
            ids={ids}
            isSelected={path === card.path}
            mobile={mobile}
          />
        ))}
      </ul>
    </ContentStyled>
  );
};

export function CardList() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:path" element={<List />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
