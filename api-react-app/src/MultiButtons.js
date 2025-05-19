import { useNavigate } from 'react-router-dom';

function MultiButtons() {
  const navigate = useNavigate();

  // 하나의 핸들러에서 버튼 구분하기
  const handleButtonClick = (event) => {
    const buttonId = event.target.id; // 버튼의 id 값으로 구분

    switch (buttonId) {
      case 'address':
        navigate('/address');
        break;
      case 'about':
        navigate('/about'); // about 페이지로 이동
        break;
      case 'contact':
        navigate('/contact'); // contact 페이지로 이동
        break;
      default:
        console.log('알 수 없는 버튼 클릭');
    }
  };

  return (
    <div>
      <button id="address" onClick={handleButtonClick}>
        주소찾기 api
      </button>
      <button id="about" onClick={handleButtonClick}>
        About
      </button>
      <button id="contact" onClick={handleButtonClick}>
        Contact
      </button>
    </div>
  );
}

export default MultiButtons;