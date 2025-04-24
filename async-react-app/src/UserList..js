// fetch를 사용하여 외부api에서 데이터를 가져와 렌더링하는 프로그램 만들기
// 외부 API를 호출하여 데이터를 가져옵니다. ([JSONPlaceholder의 사용자 데이터](https://jsonplaceholder.typicode.com/users))
// 데이터를 가져오는 동안 로딩 상태를 표시해야 합니다.
// API 요청 실패 시, 에러 메시지를 표시해야 합니다.
// 가져온 데이터를 화면에 목록 형태로 출력합니다.
// 사용자의 이름과 이메일 주소를 표시하세요.

import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('데이터를 불러오는데 실패했습니다.');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    if (loading) {
        return <p>로딩 중...</p>;
    }

    if (error) {
        return <p>에러 발생: {error}</p>;
    }

    return (
        <div>
            <h1>사용자 목록</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;