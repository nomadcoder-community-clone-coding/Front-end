import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


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
      <p>카테고리</p>
      <div>
        {name.map(user => (
          <div 
            key={user.id} 
            style={{fontSize: "15px", marginTop: "10px", wordSpacing: "2px"}}>
            <div style={{marginLeft: "12px"}}>
              # {user.title} 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBoard;