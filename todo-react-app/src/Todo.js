//현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자
import {useState} from 'react'
import {ListItem,ListItemText,InputBase,Checkbox} from '@mui/material';

let Todo = (props) => {
    const [item, setItem] = useState(props.item);
    return(
        //html코드가 들어가는 부분
        //속성을 쓸 때 카멜케이스로 작성하기
        //onclick -> onClick
        //class -> className
        <ListItem>
        <Checkbox checked={item.done}/>
        <ListItemText>
            <InputBase 
                inputProps={{"aria-label" : "naked"}}
                type="text"
                id={item.id}
                name={item.id}
                value={item.title}
                multiline={true}
                fullWidth = {true}
            />
             </ListItemText>
        </ListItem>

        // <div className="Todo">
           // <input type="checkbox" id="todo0" name="todo0" value="todo0"/>
            /* 입력 필드나 체크박스 같은 거 옆에 텍스트를 붙이고 싶을 때 쓴다.
            label 태그는 <label for="inputId">텍스트</label> 이렇게 쓰고, for속성에 name값으로 연결하여
            for 속성은 이 레이블이 어떤 입력 요소와 연결될지를 지정한다. */
           // <label for="todo0">Todo 컴포넌트 만들기</label>
        //</div>  
    )
}

export default Todo;
