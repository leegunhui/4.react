import { useParams, Outlet, Link } from "react-router-dom"

export const Home = () => {
    return(
        <div>
            <h1> 홈 화면입니다.</h1>
        </div>
    )
}

export const About = () => {
    return(
        <div>
            <h1> 설명 화면입니다.</h1>
        </div>
    )
}

export const User = () => {
    //동적 라우팅으로 넘어오는 값을 받는법
    //localhost:3000/users/1
    const {id} = useParams();
    return <div> 사용자 ID : {id}</div>
}

export const Dashboard = () => {
    return(
        <div>
            <h1>대시보드</h1>
            <Link to="overview">개요</Link>
            {' | '}
            <Link to="settings">설정</Link>
            <hr />
            <Outlet />{/* 자식 라우트 컴포넌트가 렌더링되는 자리  */}
        </div>
    )
}

export const OverView = () => {
    return <h1> 개요 화면 입니다. </h1>
}

export const Settings = () => {
    return <h1> 설정 화면 입니다. </h1>
}