import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< Updated upstream
=======
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
    font : semibold;
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
  font : semibold;
  background: #6B7280;
  border-radius: .125rem;
  border: none;
  outline: none;
  color: white;
`

>>>>>>> Stashed changes

// useState : 
// useEffect : 화면에 렌더링이 완료된 이후에 수행
function MainBoard() {
    const [loading, setLoading] = useState(false);
    const [ItemList, setItemList] = useState(null);
    const [error, setError] = useState(null);

    console.log("MainBoard 안에 들어왔다.");
    useEffect(() => {
        console.log("useEffect 안에 들어왔다");
        const loadItem = async () => {
            try {
                console.log("try문 안에 들어왔다");
                const response = await axios.get(
<<<<<<< Updated upstream
                    'https://localhost:8080/category/3'
                );
                console.log(response.data);
=======
                    'https://localhost:8080/category/1'
                );
                console.log("데이터는 : " + response.data);
>>>>>>> Stashed changes
                setItemList(response.data);
                setLoading(true);
            } catch (e) { // JSON이 로드되지 않은 경우
                setError(e);
                setLoading(false);
            }
            setLoading(false);
        };

        if (loading) return <div>로딩중..</div>;
        if (error) return <div>에러가 발생했습니다</div>;

        loadItem();
    }, []);

    return (
        <div>
<<<<<<< Updated upstream
            우왕
        </div>
    )
=======
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
        </div >
    );
>>>>>>> Stashed changes
}

export default MainBoard;