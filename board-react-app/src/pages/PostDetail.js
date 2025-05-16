import { useState,useEffect, useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams,useNavigate } from "react-router-dom";
import CustomButton from "../component/CustomButton";
import axios from "axios";
const PostDetail = () => {

    const navigate = useNavigate();

    //넘어온 아이디를 받아야 한다.
    const {id} = useParams();

    //게시글을 사용하기 위해 BoardContext 사용
    const {boardList, setBoardList} = useContext(BoardContext);

    //하나의 게시글을 담기 위한 state
    const [item, setItem] = useState({});

    //id를 통해 boardList에 들어있는 게시글 한건을 꺼내서
    //화면에 출력하기
    //useEffect()사용하기

    useEffect(() => {
        //게시글 배열에서, 넘어온 id와 일치하는 게시글을 한 건 찾아서 변수에 담는다.
        const post = boardList.find((item) => item.id === parseInt(id));

        if(post){
            setItem(post);
        } else {
            console.error('게시글을 찾을 수 없습니다.');
        }
    },[id, boardList]);

    const moveToEdit = () => {
        navigate("/edit/"+id);
    }

 const handleDelete = async () => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
        try {
            // DELETE 요청을 보냄
            const response = await axios.delete(`http://localhost:10000/api/board/${id}`);

            // 응답 상태 코드가 204일 경우
            if (response.status === 204) {
                // 서버에서 삭제가 성공적으로 처리되었으므로 front-end에서도 삭제 처리
                setBoardList((prevList) => prevList.filter((post) => post.id !== parseInt(id)));

                // 삭제 성공 메시지
                alert("게시물이 삭제되었습니다.");
                navigate("/"); // 게시판 목록으로 이동
            }
        } catch (error) {
            console.error("게시물 삭제 실패:", error);
            alert("게시물 삭제에 실패했습니다.");
        }
    }
};

    function moveToBoard(){
        navigate("/")
    }

    return(
        <div>
            <h2 className="board-detail-title">{item.title}</h2>
            <div className="board-detail-info">
                <h5>작성자 : {item.author}</h5>
                <p style={{fontSize:"12px", color:"gray"}}>{item.writingTime}</p>
            </div>
            <hr />
                <p className="board-detail-body">{item.content}</p>
            <hr />
            <div>
                <CustomButton label="수정" onClick={moveToEdit} />
                <CustomButton label="삭제" color="secondary" onClick={handleDelete} />
                <CustomButton label="목록으로" variant="outlined" onClick={moveToBoard} />
            </div>
        </div>
    )
}

export default PostDetail;