import { useEffect, useState } from 'react';
import axios from 'axios';
import parseCountryData from '../utils/parseCountryData';

export default function useLocalCountriesData() {
  const [isDataSet, setIsDataSet] = useState(false);

  useEffect(() => {
    const localCountriesData = window.localStorage.getItem('countriesData');
    if (!localCountriesData) {
      axios.get(`https://restcountries.eu/rest/v2/all`).then((response) => {
        window.localStorage.setItem(
          'countriesData',
          response && JSON.stringify(parseCountryData(response.data))
        );
        window.localStorage.setItem(
          'rawCountriesData',
          response && JSON.stringify(response.data)
        );
        setIsDataSet(true);
      });
    } else {
      setIsDataSet(true);
    }
  }, []);

  return [isDataSet];
}
