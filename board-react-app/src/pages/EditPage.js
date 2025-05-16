import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BoardContext } from "../context/BoardContext"; // Context 사용
import axios from "axios";
import CustomButton from "../component/CustomButton";
import CustomInput from "../component/CustomInput";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { boardList, setBoardList } = useContext(BoardContext); // Context 사용
  const [post, setPost] = useState({ title: "", author: "", content: "" });

  const { author, title, content } = post;

  const onChange = (event) => {
    const { value, name } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // 게시글을 불러오는 함수
  const getPost = async () => {
    const currentPost = boardList.find((item) => item.id === parseInt(id));
    if (currentPost) {
      setPost(currentPost);
    } else {
      console.error("게시글을 찾을 수 없습니다.");
      alert("게시글을 찾을 수 없습니다.");
    }
  };

  const backToPost = () => {
    navigate("/post/" + id);
  };

  // 게시글 수정하는 함수
  const updatePost = async () => {
    try {
      const response = await axios.put(
        `http://localhost:10000/api/board/${id}`,
        post
      );
      if (response.status === 200) {
        // 백엔드 연동 성공 시 프론트에도 반영
        setBoardList((prevList) =>
          prevList.map((item) =>
            item.id === parseInt(id) ? response.data.data[0] : item
          )
        );
        alert("수정되었습니다.");
        navigate("/post/" + id);
      } else {
        throw new Error("게시물 수정 실패");
      }
    } catch (error) {
      console.error("Error updating board:", error);
      alert("게시물 수정에 실패했습니다.");
    }
  };

  useEffect(() => {
    getPost(); // 게시글 데이터를 불러오는 함수
  }, [id]);  // boardList와 id가 변경될 때마다 실행됨

  return (
    <div>
      <h1>글 수정하기</h1>
      <form>
        <CustomInput label="제목" value={title} name="title" onChange={onChange} />
        <CustomInput label="작성자" value={author}  name ="author" onChange={onChange} />
        <CustomInput
          label="내용"
          multiline
          rows={6}
          value={content}
          name = "content"
          onChange={onChange}
        />
        <div>
          <CustomButton label="수정 완료" onClick={updatePost} /> {/* 수정 완료 버튼 */}
          <CustomButton label="수정 취소" variant="outlined" color="secondary" onClick={backToPost} /> {/* 수정 취소 버튼 */}
        </div>
      </form>
    </div>
  );
};

export default EditPost;
