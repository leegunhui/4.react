import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [query, setQuery] = useState(''); // 검색어 상태
  const [results, setResults] = useState([]); // 검색 결과 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  const handleSearch = async () => {
    if (!query) {
      alert("검색어를 입력하세요.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 스프링부트 백엔드로 요청
      const response = await axios.get('http://localhost:10000/api/books', {
        params: { query }
      });

      setResults(response.data.items); // 네이버 도서 API에서 받은 결과 저장
    } catch (err) {
      setError("검색에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Naver Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="책 제목을 입력하세요"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? '검색 중...' : '검색'}
      </button>

      {error && <p>{error}</p>}

      <ul>
        {results.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p>저자: {book.author}</p>
            <p>출판사: {book.publisher}</p>
            <p>출판일: {book.pubdate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;