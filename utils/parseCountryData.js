export default function parseCountryData(data) {
  let dataObj = {};

  data.forEach((value) => {
    if (dataObj[value.region]) {
      dataObj[value.region].push(value);
    } else {
      dataObj[value.region] = [];
      dataObj[value.region].push(value);
    }
  });
  return dataObj;
}
