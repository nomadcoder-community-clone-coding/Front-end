import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
                    'https://localhost:8080/category/3'
                );
                console.log(response.data);
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
            우왕
        </div>
    )
}

export default MainBoard;