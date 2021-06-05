import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #F8F8F8;
    border-radius: 7px;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    flex-direction: column;
    width:707px;
    height:115px;
    margin-bottom: 15px;
`

const Contents = styled.div`
 display: flex;
 flex-direction: row;
`

const LikeBox = styled.div`
  background: transparent !important;
  border: 1.5px solid #9B9F9D;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 28px;
  width:44px;
  height:44px;
`

const CategoryButton = styled.button`
  background: #6B7280;
  border-radius: 2px;
  border: none;
  outline: none;
  color: white;
`


function MainBoard() {
    const [name, setNames] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNames = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setNames(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    'http://localhost:8080/category/1'
                );
                setNames(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchNames();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!name) return null;
    return (
        <div>
            <div>
                {name.map(content => (
                    <Container
                        key={content.id}>
                        <Contents>
                            <LikeBox>{content.likes}</LikeBox>
                            <div>
                                <h3 style={{ marginLeft: "30px" }}>
                                    {content.title}</h3>
                                <p style={{ marginLeft: "30px", fontSize: "16px" }}>in&nbsp;
                    <CategoryButton>#{content.category}</CategoryButton> by {content.writer}
                    &emsp; * {content.createdDate} &nbsp;* {content.commentNum}
                                </p>
                            </div>
                        </Contents>
                    </Container>
                ))}
            </div>
        </div>
    );
}

export default MainBoard;