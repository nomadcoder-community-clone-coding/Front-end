import React from 'react';
import MainBoard from './component/MainBoard';
<<<<<<< Updated upstream
import Footer from './component/Footer';
=======
import Category from './component/Category';
import Footer from './component/Footer'

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
  padding-top: 100px;
`

const Card1 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height:500px;
    margin-top: 30px;
    margin-left: 70px;
`

const Card2 = styled.div`
  display: flex;
  flex: 3;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height:1000px;
  margin: 30px 50px 30px;
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
    margin-top: 30px;
    margin-right: 70px;
`

const Card4 = styled.div`
    flex: 2;
    justify-content: flex-start;
    align-items: center;
`

const WriteButton = styled.button`
  font-size: 18px;
  color: white;
  border: none;
  outline: none;
  background-color: #3B82F6;
<<<<<<< Updated upstream
=======
  &:hover {
    cursor : pointer;
  }
`
const Sorted = styled.div`
    display: flex;
    flex : 3;
    justify-content : flex-start;
    align-items : center;
    margin : auto;
    padding-top: 100px;
    font : semibold;
    font-size: 15px;
    color : gray;
`
const DefaultItem = styled.button`
    display: flex;
    font : semibold;
    font-size: 15px;
    color: gray;
    background: transparent !important;
    border: none;
    outline: none;
    &:hover {
        cursor : pointer;
    }
>>>>>>> Stashed changes
`
>>>>>>> Stashed changes

<<<<<<< Updated upstream
=======
const SelectedItem = styled.button`
    display: flex;
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
    display: flex;
    justify-content : flex-end;
    flex: 1;
    /*margin-left : 320px;*/
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
>>>>>>> Stashed changes
function App() {

  return (
    <div>
<<<<<<< Updated upstream
      <MainBoard />
=======

      <div>
        <Header />
        <Title>Community</Title>
        <SubTitle>개발자 99% 커뮤니티에서 수다 떨어요!</SubTitle>
      </div>
<<<<<<< Updated upstream
      <Card4>sort by : </Card4>
=======
      <Sorted>Sort by:&emsp;<img src={PopularIcon} /><DefaultItem>Popular</DefaultItem><img src={NewIcon} /><SelectedItem>New</SelectedItem>
        <Search><img src={SearchIcon} /> &ensp;Search</Search>
      </Sorted>
>>>>>>> Stashed changes
      <Contents>
        <Card1><Category /></Card1>
        <Card2>
          <MainBoard />
        </Card2>
        <Card3><WriteButton>글쓰기</WriteButton></Card3>
      </Contents>
      <div>
      </div>
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}

export default App;