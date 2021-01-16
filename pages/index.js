import styled from "styled-components";

const Header = styled.h1`
  color: ${(props) => props.theme.colors.red};
`;

export default function Home() {
  return <Header>Home</Header>;
}
