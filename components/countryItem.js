import styled from 'styled-components';

const StyledContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 4px -1px #2b3743;
  background-color: ${(props) => props.theme.primary};
  margin-top: 30px;
  padding-bottom: 40px;
  @media (min-width: 1440px) {
    width: 20%;
    margin-right: 5%;
  }
`;

const Img = styled.img`
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  object-fit: cover;
  background: white;
  @media (min-width: 1440px) {
    height: 100px;
  }
`;

const H2 = styled.h2`
  margin-left: 20px;
`;

const DetailCont = styled.div`
  display: flex;
  margin-left: 20px;
`;

const DetailRight = styled.div`
  margin-left: 5px;
`;

export default function CountryItem({ country }) {
  return (
    <StyledContainer>
      {/* flag svg */}
      <Img src={`${country.flag}`} />
      {/* country title */}
      <H2>{`${country.name}`}</H2>
      {/* details */}
      <DetailCont>
        <div>Population: </div>{' '}
        <DetailRight>{`${country.population
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</DetailRight>
      </DetailCont>
      <DetailCont>
        <div>Region: </div> <DetailRight>{`${country.region}`}</DetailRight>
      </DetailCont>
      <DetailCont>
        <div>Captial: </div> <DetailRight>{`${country.capital}`}</DetailRight>
      </DetailCont>
    </StyledContainer>
  );
}
