import styled from 'styled-components';
import Header from './component/Header';

const Title = styled.div`
  padding-top: 65px;
  font-size: 50px;
  text-align: center;
`
const SubTitle = styled.div`
  margin-top: .75rem;
  font-size: 22px;
  text-align: center;
`

function App() {
  return (
    <div>
      <Header />
      <Title>Community</Title>
      <SubTitle>개발자 99% 커뮤니티에서 수다 떨어요!</SubTitle>
    </div>
  );
}

export default App;
