import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 20px 30px;
`;

export default function Container({ children }) {
  return <StyledContainer> {children}</StyledContainer>;
}
