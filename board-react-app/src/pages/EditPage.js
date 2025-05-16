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
  const [post, setPost] = useState({title:"",author:"",content:""});

  const { author, title, content } = post;

  const onChange = (event) => {
    
    const { value, name } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
    console.log(post)
  };

  const getPost = async () => {
    // try {
    //   const response = await axios.get(
    //     `http://localhost:8080/board?writingId=${id}`
    //   );
    //   setPost(response.data);
    // } catch (error) {
    //   console.error("불러오지 못함", error);
    // }
    const currentPost = boardList.find((item) => item.id === parseInt(id));
    if (currentPost) {
      setPost(currentPost);
    } else {
      console.error("게시글을 찾을 수 없습니다.");
    }
  };

  const backToPost = () => {
    navigate("/post/" + id);
  };

  const updatePost = async () => {
    // try {
    //   const response = await axios.put(
    //     `http://localhost:8080/board/${id}`,
    //     post
    //   );
    //   console.log(post);
    //   if (response.status === 200) {
    //     alert("수정되었습니다.");
    //     navigate("/post/" + id);
    //   } else {
    //     throw new Error("게시물 수정 실패");
    //   }
    // } catch (error) {
    //   console.error("Error updating board:", error);
    //   alert("게시물 수정에 실패했습니다.");
    // }
    setBoardList((prevList) =>
      prevList.map((item) =>
        item.id === parseInt(id) ? { ...item, ...post } : item
      )
    );
    alert("게시물이 수정되었습니다.");
    navigate("/post/" + id); // 수정 후 상세 페이지로 이동
  };

//   useEffect(() => {
//     getPost();
//   }, [id,boardList]);

  return (
    <div>
      <h1>글 수정하기</h1>
      <form>
        <CustomInput label="제목" value={title} onChange={onChange} />
        <CustomInput label="작성자" value={author} onChange={onChange} />
        <CustomInput
          label="내용"
          multiline
          rows={6}
          value={content}
          onChange={onChange}
        />
        <div>
          <CustomButton label="수정 완료" onClick={updatePost} />
          <CustomButton label="수정 취소" variant="outlined" color="secondary" onClick={backToPost} />
        </div>
      </form>
    </div>
  );
};

export default EditPost;
