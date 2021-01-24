import styled from "styled-components";

const Button = styled.button`
  background: white;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.fonts.colors.mediumGrey};

  border: none;

  border-radius: 5px;

  padding: 0.75rem;

  cursor: pointer;
  box-shadow: 0px 3px 4px -2px rgb(0 0 0 / 10%);

  &:hover {
    box-shadow: 0px 3px 4px -2px rgb(0 0 0 / 20%);
  }

  &:active {
    background: grey;
  }
`;

export { Button };
