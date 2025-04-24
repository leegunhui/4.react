import { createContext, useState } from "react";

//1. 새로운 Context 생성하기
export const UserContext = createContext();

//사용자 정보를 관리하고 하위 컴포넌트에 데이터를
//제공하기 위한 UserProvider컴포넌트
export const UserProvider = (props) => {
    
    //2.전달하고자하는 내용을 정의
    const [user,setUser] = useState({name:'John Doe', age:30});

    return(
        //3. Provider컴포넌트를 이용하여 전달하고 싶은 데이터를
        //value에 담는다.
        
        //Provider : Context에서 제공하는 특수한 컴포넌트
        //value에 전달하고 싶은 데이터를 적는다.
        <UserContext.Provider value={{user,setUser}}>
            {props.children} {/* <Parent /> */}
        </UserContext.Provider>
    )




}