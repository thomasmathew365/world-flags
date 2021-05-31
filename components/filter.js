import styled from 'styled-components';
import { useState } from 'react';

const REGION_LIST = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'Polar',
];

const FilterContainer = styled.div`
  margin-top: 30px;
`;

const FilterBox = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
  box-shadow: 0px 0px 4px -1px #2b3743;
  border: none;
  padding: 10px;
  padding-right: 30px;
  color: ${(props) => props.theme.primaryText};
  display: inline-block;
`;

const FilterDropBox = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
  box-shadow: 0px 0px 4px -1px #2b3743;
  border: none;
  padding: 10px;
  padding-right: 30px;
  color: ${(props) => props.theme.primaryText};
  position: absolute;
  margin-top: 5px;
`;

export default function Filter({ setRegion }) {
  const [dropped, setDropped] = useState(false);
  return (
    <FilterContainer>
      <FilterBox
        onClick={() => {
          setDropped(!dropped);
        }}
      >
        Filter by Region
      </FilterBox>
      {dropped && (
        <FilterDropBox>
          {REGION_LIST.map((region, k) => {
            return (
              <div
                onClick={() => {
                  setRegion(region);
                  setDropped(false);
                }}
                key={k}
              >
                {region}
              </div>
            );
          })}
        </FilterDropBox>
      )}
    </FilterContainer>
  );
}
