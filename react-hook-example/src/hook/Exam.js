import {useState} from 'react'

 /*let ShowHide = () => {
  const [visible, setVisible] = useState(true);

  const changeVisibility = () => {
    setVisible(visible => {
        //setVisible(prev => !prev);
        if (visible) {
          return false; 
        } 
        else {
          return true;
        }
      });
  };

  return (
    <div>
        {visible ? <h1>Hello, React</h1> : null}
        <button onClick={changeVisibility}>
            {visible ? '숨기기' : '보이기'}
        </button>
    </div>
  );
}

export default ShowHide; */

let Sol1 = () => {
  const[food,SetFood] = useState(['초콜릿','사탕'])
  const[value, SetValue] = useState("");

  const inputHandler = (e) => {
    SetValue(e.target.value)
  }

  const clickHandler = () => {
    SetFood(prev => [value,...prev])
  }

  return (
    <div>
      <input onChange={inputHandler} type = "text"/>
      <button onClick = {clickHandler}>추가</button>
      <ul>
        {food.map((item,idx) => (
          <li key={idx} > {item}</li>
        ))}
      </ul>
    </div>
  )
}



export default Sol1;