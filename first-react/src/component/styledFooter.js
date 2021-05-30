import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`;

export const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`;

export const Section4 = styled.div`
display: grid;
grid-template-columns : 320px 1fr 1fr 1fr 1fr;

grid-gap: 3px;

  text-align: left;
`;


export const Row = styled.div`
  display: grid;
  /*grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));*/
  grid-template-columns : 320px 1fr 1fr 2fr;
  /* grid-template-columns: repeat(auto-fill, minmax(230px, 3fr)); */
  grid-gap: 3px;
  /* @media (max-width: 1800px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }*/
 
`;

export const Link = styled.a`
  font-size : 1 rem;
  color: gray;
  margin-bottom: 15px;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Content = styled.p`
  font-size: .75rem;
  color: gray;
  margin-bottom: 0px;
`;

export const Left = styled.button`
  margin-left: 27px;
  width: 300px;
  background: white;
  color: gray;
  border: none;
  outline: none;
`;

export const Right = styled.button`
margin-left: 10px;
  background: white;
  color: gray;
  border: none;
  outline: none;
`;

export const Title = styled.p`
  color: gray;
  font: semibold,
  font-size: 1 rem;
  margin-bottom: 20px;
  font-weight: bold;
`;