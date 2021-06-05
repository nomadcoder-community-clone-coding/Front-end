import React from 'react';
import styled from "styled-components";
import bell from '../img/bell-icon.png';
import nomard from '../img/Nomardcorder-icon.png';
import profile from '../img/profile-icon.png';

const Navigation = styled.div`
  position: fixed;
  top:0;
  display: flex;
  width: 100vw;
  flex-direction: row;
  background-color: white;
  margin-top: 0px;
  padding-top: 0px;
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
  &:hover {
    cursor : pointer;
    transition: 200ms ease-in;
  }
`

const Button1 = styled.button`
  margin-left: 27px;
  font-size: 15px;
  color: gray;
  border: none;
  outline: none;
  background-color: white;
  &:hover {
    color: black;
    cursor : pointer;
    transition: 200ms ease-in;
  }
`

const Button2 = styled.button`
  margin-left: 10px;
  border: none;
  outline: none;
  background-color: white;
  &:hover {
    cursor : pointer;
    transition: 200ms ease-in;
  }
`

function Header() {
  return (
    <Navigation>
      <Menu>
        <Logo><img src={nomard} style={{ width: "80px", height: "85px" }} /></Logo>
        <Button1>Course</Button1>
        <Button1>Challenges</Button1>
        <Button1 style={{ color: "black" }}>Community</Button1>
        <Button1>FAQ</Button1>
        <Button1>Roadmap</Button1>
      </Menu>
      <Profile>
        <Button2><img src={profile} /></Button2>
        <Button2><img src={bell} style={{ marginRight: '30px' }} /></Button2>
      </Profile>
    </Navigation>
  );
}

export default Header;