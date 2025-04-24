// 블로그 프로그램 만들기
// 1. 게시물 리스트를 불러오는 기능
// 2. 게시물 추가기능
// 3. 게시물 삭제기능

// 제목과 내용을 입력할 수 있는 입력필드2개와 추가 버튼
// 입력필드 밑에는 게시물 리스트를 출력
// 각각의 게시물은 삭제버튼이 옆에 있어야함

//추가 예제
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const BlogApp = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPost, setNewPost] = useState({ title: '', body: '' });

    // 게시물 리스트 불러오기
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // 새 게시물 추가하기
    //jsonPlaceholder에 추가를 요청한다고 해서 진짜 추가되는건 아님
    //state에 새 게시물을 추가하기
    const addPost = async () => {
        if (!newPost.title || !newPost.body) return alert('모든 필드를 입력해 주세요.');

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
            setPosts([response.data, ...posts]);
            setNewPost({ title: '', body: '' });
        } catch (err) {
            setError(err.message);
        }
    };

    // 게시물 삭제하기
    //필터링해서 다시 랜더링하기
    const deletePost = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <p>로딩중...</p>;
    }
    if (error) {
        return <p>에러 발생: {error}</p>;
    }

    return (
        <div className="App">
            <h1>블로그 게시물</h1>

            {/* 새 게시물 추가하기 */}
            <div>
                <h2>새 게시물 추가</h2>
                <input
                    type="text"
                    placeholder="제목"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <textarea
                    placeholder="내용"
                    value={newPost.body}
                    onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                />
                <button onClick={addPost}>게시물 추가</button>
            </div>

            {/* 게시물 리스트 */}
            <div>
                <h2>게시물 리스트</h2>
                {posts.map(post => (
                    <div key={post.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => deletePost(post.id)}>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

