import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UpIcon from '../img/up-icon.png';
import CommentIcon from '../img/comment_icon.png';
import Arrow from '../img/Arrow.png';

const Container = styled.div`
    background-color: #F8F8F8;
    border-radius: 7px;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    flex-direction: column;
    width:100%;
    min-height:115px;
    margin-bottom: 15px;
`

const Contents = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
`

const LikeBox = styled.div`
  background: transparent !important;
  border: 2px solid #9B9F9D;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 25px;
  width:44px;
  height:44px;
  &:hover {
    cursor : pointer;
    transition: 200ms ease-in;
    }
`

const CategoryButton = styled.button`
  background: #6B7280;
  border-radius: 2px;
  border: none;
  outline: none;
  color: white;
`

const Details = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  justify-content: space-evenly;
`

const DetailTitle = styled.h3`
  &:hover {
    cursor : pointer;
    transition: 200ms ease-in;
    }
`

const Writer = styled.button`
    font: semibold;
    font-weight: 600;
    border-radius: 2px;
    border: none;
    outline: none;
    background: #F8F8F8;
    &:hover {
        cursor : pointer;
        transition: 200ms ease-in;
        }
`

const Comment = styled.button`
    border-radius: 2px;
    border: none;
    outline: none;
    background: #F8F8F8;
    &:hover {
        cursor : pointer;
        transition: 200ms ease-in;
        }
`

const ProfilePhoto = styled.div`
  display: flex;
  flex: 1;
  justify-content:flex-end;
  align-items: center;
  margin-right: 25px;
  &:hover {
    cursor : pointer;
    transition: 200ms ease-in;
    }
`

const NextButton = styled.button`
    display: flex;
    align-items : center;
    justify-content: center;
    margin-left : 290px;
    background: transparent !important;
    border: none;
    outline: none;
    color: #3B82F6;
    font-size: 18px;
    margin-top: 50px;
    &:hover {
        cursor : pointer;
        transition: 200ms ease-in;
        }
`
const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

function MainBoard() {
    const [name, setNames] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNames = async () => {
            try {
                // ????????? ?????? ??? ????????? error ??? users ??? ???????????????
                setError(null);
                setNames(null);
                // loading ????????? true ??? ????????????.
                setLoading(true);
                const response = await axios.get(
                    'http://localhost:8080/category/1'
                );
                setNames(response.data); // ???????????? response.data ?????? ??????????????????.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchNames();
    }, []);

    if (loading) return <div>?????????..</div>;
    if (error) return <div>????????? ??????????????????</div>;
    if (!name) return null;
    return (
        <Board>
            <div>
                {name.map(content => (
                    <Container
                        key={content.id}>
                        <Contents>
                            <LikeBox><img src={UpIcon} />{content.likes}</LikeBox>
                            <Details>
                                <DetailTitle style={{ marginLeft: "30px", marginBottom: "0px" }}>
                                    {content.title}</DetailTitle>
                                <p style={{ marginLeft: "30px", fontSize: "16px" }}>in&nbsp;
                    <CategoryButton>#{content.category}</CategoryButton> by <Writer>{content.writer}</Writer>
                    &emsp; ??? {content.createdDate} &nbsp; <img src={CommentIcon} />&nbsp;<Comment>{content.commentNum}</Comment>

                                </p>
                            </Details>
                            <ProfilePhoto>
                                <img
                                    src={content.writerPhoto}
                                    style={{
                                        borderRadius: "50%",
                                        width: "60px",
                                        height: "60px"
                                    }} />
                            </ProfilePhoto>
                        </Contents>
                    </Container>
                ))}
                <NextButton>Next Page&nbsp;
                <img src={Arrow} style={{ width: "15px", height: "15px" }} />
                </NextButton>
            </div>
        </Board>
    );
}

export default MainBoard;
