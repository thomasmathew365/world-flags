import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import Navigation from '../components/Navigation';
import useDarkMode from '../hooks/useDarkMode';
import useLocalCountriesData from '../hooks/useLocalCountriesData';
import SearchBar from '../components/search';
import Container from '../components/container';
import FilterBar from '../components/filter';
import CountryItem from '../components/countryItem';

function HomePage() {
  const [region, setRegion] = useState('Asia');
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, toggleTheme] = useDarkMode();
  const [isDataSet] = useLocalCountriesData();
  if (!isDataSet) {
    return <div>Loading...</div>;
  }
  const localCountriesData = JSON.parse(
    window.localStorage.getItem('countriesData')
  );

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Navigation toggleTheme={toggleTheme} theme={theme} />
        <Container>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterBar
            setRegion={setRegion}
            region={region}
            isDisabled={searchTerm}
          />
          <div>
            {/* {
              map each item in the array, filter out only matching countries by name if search term exists
            } */}
            {localCountriesData[region]
              .map((country) => <CountryItem country={country} />)
              .filter((reactElement) => {
                let countryName = reactElement.props.country.name.toLowerCase();
                return searchTerm
                  ? countryName.includes(searchTerm.toLowerCase())
                  : true;
              })}
          </div>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default HomePage;
