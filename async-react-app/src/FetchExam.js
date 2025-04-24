import React, { useState, useEffect } from 'react';

const FetchExam = () => {
    const [posts, setPosts] = useState([]);        // 데이터를 저장할 상태
    const [loading, setLoading] = useState(true);  // 로딩 상태 관리
    const [error, setError] = useState(null);      // 에러 상태 관리

    useEffect(() => {
        //비동기적으로 데이터 호출
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                //통신이 잘 됐는지 안됐는지의 결과에 따라서 처리
                if (!response.ok) {
                    throw new Error('데이터를 불러오는데 실패했습니다.');
                }
                //100개의 게시물 데이터가 data로 들어가게 된다
                const data = await response.json();
                setPosts(data);  // 상태에 데이터를 저장
            } catch (err) {
                setError(err.message);  // 에러 처리
            } finally {
                setLoading(false);  // 로딩 상태를 완료로 설정
            }
        };

        fetchData();  // 함수 호출
    }, []);  // 컴포넌트가 처음 렌더링될 때 한 번만 실행

    // 로딩 중일 때 보여줄 내용
    if (loading) {
        return <p>로딩 중...</p>;
    }

    // 에러 발생 시 보여줄 내용
    if (error) {
        return <p>에러 발생: {error}</p>;
    }

    // 데이터를 성공적으로 불러왔을 때 보여줄 내용
    return (
        <div>
            <h1>게시글 목록</h1>
            <ul>
                {/*posts.slice(0, 10)는 posts 배열에서 인덱스 0부터 9까지의 첫 10개의 게시글을 잘라내서 새로운 배열을 반환합니다.*/}
                {posts.slice(0, 10).map((post) => (  // 첫 10개의 게시글만 출력
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchExam;