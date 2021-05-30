import React from 'react';
import Footer from './styledFooter';
import logo from '../img/nomad_logo.png';
import { FaInstagram, FaYoutube, FaFacebookSquare, FaGithub } from 'react-icons/fa';


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Section1>
                        <Footer.Title>NOMAD CODERS</Footer.Title>
                        <Footer.Content>유한회사 노마드 컴퍼니</Footer.Content>
                        <Footer.Content>대표 : 박인</Footer.Content>
                        <Footer.Content>개인정보책임관리자 : 박인</Footer.Content>
                        <Footer.Content>사업자번호: 301-88-01666</Footer.Content>
                        <Footer.Content>주소: 서울시 마포구 양화로 8길 17-28, 6층 141호</Footer.Content>
                        <Footer.Content>-</Footer.Content>
                        <Footer.Content>원격평생교육원: 서울시 서부교육지원청(제2020-13호)</Footer.Content>
                        < Footer.Content > 통신판매업 신고번호: 2020 - 서울마포 - 1987</Footer.Content >
                        < Footer.Content > 이메일: help[@]nomadcoders.co</Footer.Content >
                    </Footer.Section1 >
                    <Footer.Section2>
                        <Footer.Title>NAVICATION</Footer.Title>
                        <Footer.Link href="#">Courses</Footer.Link>
                        <Footer.Link href="#">Challenges</Footer.Link>
                        <Footer.Link href="#">Community</Footer.Link>
                        <Footer.Link href="#">FAQ</Footer.Link>
                        <Footer.Link href="#">Roadmap</Footer.Link>
                    </Footer.Section2>
                    <Footer.Section2>
                        <Footer.Title>LEGAL</Footer.Title>
                        <Footer.Link href="#">이용약관</Footer.Link>
                        <Footer.Link href="#">개인정보취급방침</Footer.Link>
                        <Footer.Link href="#">취소 및 환불정책</Footer.Link>
                    </Footer.Section2 >
                    <Footer.Section3>
                        <Footer.Content><img src={logo} /></Footer.Content>
                        < Footer.Content >Clone Startups. Learn to Code</Footer.Content >
                    </Footer.Section3 >

                </Footer.Row>
                <p> </p>
                <Footer.Section4>

                    <Footer.Left>© 2017-2021 Nomad Coders. All rights reserved.</Footer.Left>
                    <Footer.Right style={{ marginLeft: "550px" }}><FaInstagram /></Footer.Right>
                    <Footer.Right><FaYoutube /></Footer.Right>
                    <Footer.Right><FaFacebookSquare /></Footer.Right>
                    <Footer.Right><FaGithub /></Footer.Right>

                </Footer.Section4>

            </Footer.Wrapper >
        </Footer >
    )
}