import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 0px 4px -1px #2b3743;
`;

const SearchInput = styled.input`
  border: none;
  padding: 20px 10px;
  font-size: 16px;
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.primary};
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${(props) => props.theme.primaryText};
  }
`;
const FontAwesomeIconContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 10px;
`;

export default function Search() {
  return (
    <SearchContainer>
      <FontAwesomeIconContainer>
        <FontAwesomeIcon icon={faSearch} />
      </FontAwesomeIconContainer>
      <SearchInput placeholder={`search for a country..`} />
    </SearchContainer>
  );
}
