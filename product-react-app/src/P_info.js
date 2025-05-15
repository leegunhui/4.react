import React from 'react';
import { useState,useEffect } from 'react';
import './style.css'
import { call } from './service/ApiService';
import AddProduct from './AddProduct';
import OrderInfo from './order_info';

function P_info(){

    //상품정보를 가지고 있는 state
    const [items, setItems] = useState([])

    //추가창을 띄우는 state
    const [open, setOpen] = useState(true);

    //라디오버튼의 index를 저장하는 state
    const[selectedIndex, setSelectedIndex] = useState(null);

    //주문개수를 저장하는 state
    const [orderCount, setOrderCount] = useState('');  
    
    // 주문 내역을 렌더링할지 여부를 제어하는 state
    const [showOrderInfo, setShowOrderInfo] = useState(false);

    //조회
    useEffect(() => {
        call("/product", "GET")
          .then(result => {
            setItems(result.data);
          })
        
    }, [])

    //상품추가 창 띄우는 함수
    const onButtonClick = ()=>{
        setOpen(false);
    }

    //상품추가 기능
    const addItem = (item) => {
    call("/product", "POST", item)
        .then(result => setItems(result.data))
    }

    //클릭한 라디오버튼의 index
    const handleRadioChange = (index) => {
        setSelectedIndex(index);
        setOrderCount(''); // 라디오 버튼 선택 시 주문 개수를 초기화
    };

    console.log("누른 라디오버튼 : "+selectedIndex);

    // 주문 개수 변경 시 호출되는 함수
    const handleOrderCountChange = (event) => {
        setOrderCount(event.target.value);
    };

    //주문하기
    const orderProduct = () => {
        // 주문하기 전에 유효성 검사를 수행
        if (selectedIndex && orderCount > 0 && items[selectedIndex - 1]) {
            const orderData = {
              productId: items[selectedIndex- 1].productId, // productId는 선택된 인덱스에서 가져옴
              productCount: parseInt(orderCount)
            };
        call("/orders", "POST", orderData)
        .then(result => setItems(result.data))
        }else {
            alert("상품을 선택하고 주문 개수를 입력하세요.");
        }
    }
    
    // 주문 내역 버튼 클릭 시 호출되는 함수
    const showOrderDetails = () => {
        setShowOrderInfo(!showOrderInfo);  // 주문 내역을 렌더링하도록 상태 업데이트
    };


    //상품 조회
    let productItems = items.length > 0 && (
        <div>
            <table border="1">
            <thead>
            <tr>
                <th>단일 선택</th>
                <th>주문 개수</th>
                <th>상품 번호</th>
                <th>상품 이름</th>
                <th>상품 재고</th>
                <th>상품 가격</th>
                <th>등록 날짜</th>
                <th>수정 날짜</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item,index) => (
            <tr key={item.productId}>
                <td><input type="radio" name="productId" onChange={() => handleRadioChange(index+1)}
                  checked={selectedIndex === index+1}/></td>
                <td><input 
                       type="number"
                       value={selectedIndex === index + 1 ? orderCount : ''}
                       onChange={handleOrderCountChange}
                       readOnly={selectedIndex !== index + 1} /></td>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.productStock}</td>
                <td>{item.productPrice}</td>
                <td>{item.registerDate}</td>
                <td>{item.updateDate}</td>
            </tr>
            ))}
            </tbody>
            </table>
            <button type="button" onClick={orderProduct}>주문 완료</button><button type="button" onClick={showOrderDetails}>주문내역</button>
        </div>
      );


    //상품추가 버튼
    let addProductButton = <button type="button" onClick={onButtonClick}>상품추가</button>;
    
    let addProduct = addProductButton;

    if(open){
        addProduct = <AddProduct setItems={setItems} setOpen={setOpen} />
    }

    //open이 false가 되면 상품추가 창을 연다.
    if(!open){
    addButton = addProductScreen;
    }


    return(
        <div className='container'>
            {addButton}
            {productItems}
            {showOrderInfo && <OrderInfo />} {/* showOrderInfo가 참일때 주문 내역을 렌더링 */}
        </div>
    );
}

export default P_info;