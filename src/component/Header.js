import React, {useState} from 'react';
import styled from "styled-components";
import bell from '../img/bell-icon.png';
import nomard from '../img/Nomardcorder-icon.png';
import profile from '../img/profile-icon.png';

const Navigation = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: white;
`

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content:flex-start;
  flex-direction: row;
  background-color: white;
`

const Profile = styled.div`
  display: flex;
  flex: 1;
  justify-content:flex-end;
  flex-direction: row;
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


function Header() {
    return (
        <Navigation>
          <Menu>
            <Logo><img src={nomard} style={{width: "80px", height: "85px"}}/></Logo>
            <Button1>Course</Button1>
            <Button1>Challenges</Button1>
            <Button1>Community</Button1>
            <Button1>FAQ</Button1>
            <Button1>Roadmap</Button1>
          </Menu>
          <Profile>
            <Button2><img src={profile}/></Button2>
            <Button2><img src={bell} style={{marginRight: '30px'}}/></Button2>
          </Profile>
        </Navigation>
    );
  }
  
  export default Header;