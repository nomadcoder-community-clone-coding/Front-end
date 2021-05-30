import styled from "styled-components";
import bell from '../img/bell-icon.png';
import nomard from '../img/Nomardcorder-icon.png';
import profile from '../img/profile-icon.png';

const Navigation = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-content:flex-end;
  justify-content:flex-start;
  background-color: white;
`

const Logo = styled.image`
  margin-left: 32px;
`

const Button1 = styled.button`
  margin-left: 27px;
  font-size: 15px;
  border: none;
  outline: none;
  background-color: white;
`

const Button2 = styled.button`
  margin-left: 10px;
  border: none;
  outline: none;
  background-color: white;
`

const printLog = () => {
  console.log('Click!');
}

function Header() {
    return (
        <Navigation>
          <Logo><img src={nomard} style={{width: "80px", height: "85px"}}/></Logo>
          <Button1 onClick={printLog}>Course</Button1>
          <Button1 onClick={printLog}>Challenges</Button1>
          <Button1 onClick={printLog}>Community</Button1>
          <Button1 onClick={printLog}>FAQ</Button1>
          <Button1 onClick={printLog}>Roadmap</Button1>
          <Button2 onClick={printLog}><img src={profile} style={{marginLeft: "680px"}} /></Button2>
          <Button2 onClick={printLog}><img src={bell}/></Button2>
        </Navigation>
    );
  }
  
  export default Header;