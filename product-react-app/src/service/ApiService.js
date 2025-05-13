// src/service/ApiService.js
import axios from 'axios';

// apiClient 정의
const apiClient = axios.create({
  baseURL: 'http://localhost:8080', // 실제 API 서버 URL로 변경
  headers: {
    'Content-Type': 'application/json',
  },
});

// API 호출 함수 정의
export const call = async (url, method, body = null) => {
  try {
    const response = await apiClient({
      url: url,
      method: method,
      data: body,
    });
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;  // 에러를 다시 던져서 호출한 곳에서 처리 가능하도록 함
  }
};

// default export
export default {
  call,
};
