import { useParams } from "react-router-dom"


export const Home = () => {
    return(
        <div>
            <h1>홈화면입니다</h1>
        </div>
    )
}

export const About = () => {
    return(
        <div>
            <h1>설명화면입니다</h1>
        </div>
    )
}

export const User = () => {
    //동적 라우팅으로 넘어오는 값을 받는법
    //localhost:3000/users/1
    const {id} = useParams();
    return <div>사용자 ID : {id}</div>
}