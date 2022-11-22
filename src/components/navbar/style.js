import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const NavbarMainContainer = styled.header`
  height: 81px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-right: 30px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      font-size: 18px;
    }
  }
  a {
    cursor: pointer;
    padding: 0 12px;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    li {
      font-family: "Roboto Mono";
      font-weight: 300;
    }
  }
`;

export const SearchIcons = styled(BsSearch)``;
