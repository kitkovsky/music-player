import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    color: black;
    background: transparent;
    border: 2px solid rgb(65, 65, 65);
    cursor: pointer;
    padding: 0.8rem;
    transition: all 0.3s ease;
    z-index: 10;

    &:hover {
      background: rgb(65, 65, 65);
      color: white;
    }
  }

  h1 {
    z-index: -1;
  }
`;

interface Props {
  isLibraryOpen: boolean;
  setIsLibraryOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<Props> = ({ isLibraryOpen, setIsLibraryOpen }) => {
  return (
    <StyledNav>
      <h1>Waves</h1>
      <button onClick={() => setIsLibraryOpen(!isLibraryOpen)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </StyledNav>
  );
};

export default Nav;
