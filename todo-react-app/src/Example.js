import { useState } from "react"

export let Example = () => {
    const [message, setMessage] = useState('Hello,world');
    return(
        <div>
            <p>{message}</p>
            {/*상태는 무조건 setter를 이용하여 변경해야한다.*/}
            <button onClick={() => setMessage('Hello, React!')}>Change Message</button>
        </div>
    )
}