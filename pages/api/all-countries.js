import axios from 'axios';

export default async (req, res) => {
  const response = await axios.get('https://restcountries.eu/rest/v2/all');
  res.status(200).json(response.data);
};
