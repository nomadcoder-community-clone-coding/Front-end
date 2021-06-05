import styled from 'styled-components';
import Header from './component/Header';
import MainBoard from './component/MainBoard';
import Category from './component/Category';
import Footer from './component/Footer'
import PopularIcon from './img/popular_icon.png';
import NewIcon from './img/new_icon.png';
import SearchIcon from './img/search_icon.png';

const Title = styled.div`
  font-weight: 500;
  padding-top: 200px;
  font-size: 50px;
  text-align: center;
`
const SubTitle = styled.div`
  margin-top: .75rem;
  font-size: 22px;
  color: #7C838F;
  text-align: center;
`

const Contents = styled.div`
  display: flex;
  flex-direction: row;
`

const Card1 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height:500px;
    margin-top: 20px;
    margin-left: 70px;
`

const Card2 = styled.div`
  display: flex;
  flex: 3;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height:1000px;
  margin: 20px 50px 20px;
`

const Card3 = styled.div`
    background-color: #3B82F6;
    border-radius: 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height:40px;
    margin-top: 20px;
    margin-right: 70px;
`

const WriteButton = styled.button`
  font-size: 18px;
  color: white;
  border: none;
  outline: none;
  background-color: #3B82F6;
  &:hover {
    cursor : pointer;
  }
`
const Sorted = styled.div`
    padding-top: 100px;
    margin-left : 320px;
    font : semibold;
    font-size: 15px;
    color : gray;
`
const DefaultItem = styled.button`
    font : semibold;
    font-size: 15px;
    color: gray;
    background: transparent !important;
    border: none;
    outline: none;
    &:hover {
        cursor : pointer;
    }
`

const SelectedItem = styled.button`
    font : semibold;
    font-size: 15px;
    background: transparent !important;
    border: none;
    outline: none;
    color : #3B82F6;
    &:hover {
        cursor : pointer;
      }
`

const Search = styled.button`
    display: inline-block;
    margin-left : 320px;
    font : semibold;
    font-size: 15px;
    background: transparent !important;
    border: none;
    outline: none;
    color : gray;
    &:hover {
        cursor : pointer;
      }
`
function App() {
  return (
    <div>
      <div>
        <Header />
        <Title>Community</Title>
        <SubTitle>개발자 99% 커뮤니티에서 수다 떨어요!</SubTitle>
      </div>
      <Sorted>Sort by:&emsp;<img src={PopularIcon} /><DefaultItem>Popular</DefaultItem><img src={NewIcon} /><SelectedItem>New</SelectedItem>
        <Search><img src={SearchIcon} /> Search</Search>
      </Sorted>
      <Contents>
        <Card1><Category /></Card1>
        <Card2><MainBoard /></Card2>
        <Card3><WriteButton>글쓰기</WriteButton></Card3>
      </Contents>
      <div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
