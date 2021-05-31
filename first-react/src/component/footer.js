import React from 'react';
import logo from '../img/nomad_logo.png';
import { FaInstagram, FaYoutube, FaFacebookSquare, FaGithub } from 'react-icons/fa';
import {
    Box, Container, Row, Column, FooterLink, FooterContent1, FooterContent2, Heading, Bottom, FooterLeft, FooterRight
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>NOMAD CODERS</Heading>
                        <FooterContent1>유한회사 노마드 컴퍼니</FooterContent1>
                        <FooterContent1>대표 : 박인</FooterContent1>
                        <FooterContent1>개인정보책임관리자 : 박인</FooterContent1>
                        <FooterContent1>사업자번호: 301-88-01666</FooterContent1>
                        <FooterContent1>주소: 서울시 마포구 양화로 8길 17-28, 6층 141호</FooterContent1>
                        <FooterContent1>-</FooterContent1>
                        <FooterContent1>원격평생교육원: 서울시 서부교육지원청(제2020-13호)</FooterContent1>
                        <FooterContent1 >통신판매업 신고번호: 2020 - 서울마포 - 1987</FooterContent1 >
                        <FooterContent1 >이메일: help[@]nomadcoders.co</FooterContent1 >
                    </Column>
                    <Column>
                        <Heading>NAVICATION</Heading>
                        <FooterLink href="#">Courses</FooterLink>
                        <FooterLink href="#">Challenges</FooterLink>
                        <FooterLink href="#">Community</FooterLink>
                        <FooterLink href="#">FAQ</FooterLink>
                        <FooterLink href="#">Roadmap</FooterLink>
                    </Column>
                    <Column>
                        <Heading>LEGAL</Heading>
                        <FooterLink href="#">이용약관</FooterLink>
                        <FooterLink href="#">개인정보취급방침</FooterLink>
                        <FooterLink href="#">취소 및 환불정책</FooterLink>
                    </Column>
                    <Column>
                        <FooterContent2><img src={logo} /></FooterContent2>
                        <FooterContent2 >Clone Startups. Learn to Code</FooterContent2>
                    </Column>
                </Row>
                <p></p>
                <hr width="1350px" color="EBEBEB"></hr>
                <p></p>
                <Bottom>
                    <FooterLeft>© 2017-2021 Nomad Coders. All rights reserved.</FooterLeft>
                    <FooterRight><FaInstagram /></FooterRight>
                    <FooterRight><FaYoutube /></FooterRight>
                    <FooterRight><FaFacebookSquare /></FooterRight>
                    <FooterRight><FaGithub /></FooterRight>
                </Bottom>
            </Container>
        </Box>
    )
}

export default Footer;