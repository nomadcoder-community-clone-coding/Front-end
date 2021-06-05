import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 17px;
  padding-bottom: 20px;
  margin-left: 12px;
`

const CategoryButton = styled.button`
  text-align: start;
  border-radius: 9999px;
  width: 100%;
  height: 25px;
  border: none;
  outline: none;
  background: transparent !important;
  color: 'black';
`

function Category() {
  const [name, setNames] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function changeButtonColor(e) {
    console.log("잘 돌아감");
  }

  useEffect(() => {
    const fetchNames = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setNames(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://localhost:8080/category/'
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
      <Title>카테고리</Title>
      <div>
        {name.map(user => (
          <CategoryButton
            key={user.id}
            onClick={changeButtonColor}
            style={{ fontSize: "15px", marginTop: "10px", wordSpacing: "2px" }}>
            <div style={{ marginLeft: "12px" }}>
              # {user.name}
            </div>
          </CategoryButton>
        ))}
      </div>
    </div>
  );
}

export default Category;