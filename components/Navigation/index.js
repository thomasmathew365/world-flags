import styled from 'styled-components';
import { faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  transition: all 0.25s linear;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
`;

const NavTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const NavThemeToggle = styled.div`
  font-size: 16px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FontAwesomeIconContainer = styled.div`
  margin-right: 10px;
`;

export default function NavBar({ theme, toggleTheme }) {
  return (
    <NavContainer>
      <NavTitle>Select a region</NavTitle>
      <NavThemeToggle onClick={toggleTheme}>
        <FontAwesomeIconContainer>
          <FontAwesomeIcon icon={theme === 'light' ? farMoon : fasMoon} />
        </FontAwesomeIconContainer>
        Dark Mode
      </NavThemeToggle>
    </NavContainer>
  );
}
