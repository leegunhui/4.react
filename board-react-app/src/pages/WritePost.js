import {useState, useContext} from 'react'
import { BoardContext } from '../context/BoardContext'
import CustomButton from '../component/CustomButton'
import CustomInput from '../component/CustomInput'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const WritePost = () => {

    const {boardList, setBoardList} = useContext(BoardContext);

    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const savePost = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            author,
            writingTime : new Date().toISOString(),
            content,
        }

        try {
            // 서버에 게시물 등록을 요청하는 부분
            const response = await axios.post('http://localhost:10000/api/board', newPost);
            if (response.status === 201) {  // 게시물 추가 성공
                alert('게시물이 등록되었습니다.');
                const updatedBoardList = await axios.get("http://localhost:10000/api/board/all");
                setBoardList(updatedBoardList.data.data); // BoardContext의 상태 갱신
                navigate("/");  // 메인 페이지로 리다이렉트
            }
        } catch (error) {
            setBoardList([...boardList,newPost]);
            alert('게시물이 등록되었습니다.')
            navigate("/");
        }
        
    }

    const backToBoard = () => {
        navigate("/");
    }

    return(
        <div>
            <h1>글쓰기 페이지</h1>
            <form>
                <CustomInput label="제목" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <CustomInput label="작성자" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <CustomInput 
                    label="내용"
                    multiline
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}    
                />
                <div>
                    <CustomButton label="저장" onClick={savePost} />
                    <CustomButton label="취소" variant='outlined' color="secondary" onClick={backToBoard} />
                </div>
            </form>
        </div>
    )
}

export default WritePost;