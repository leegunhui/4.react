import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import { call } from './service/ApiService';

const P_info = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(true); 

  useEffect(() => {
        //백엔드에게 요청하기
        call("/product", "GET")//이제는 /Todo에 접근하려면 토큰인증이 필요하다.
          .then(result => {
            setItems(result.data);
          })
        
    }, [])

  const onButtonClick = () => {
    setOpen(true); 
  };

  const productItems = items.length > 0 && (
    <table border="1">
      <thead>
        <tr>
          <th>상품 번호</th>
          <th>상품 이름</th>
          <th>상품 재고</th>
          <th>상품 가격</th>
          <th>등록 날짜</th>
          <th>수정 날짜</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.productId}>
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
  );

  let addProductButton = <button type="button" onClick={onButtonClick}>상품 추가</button>;

  let addProductScreen = <AddProduct />;
  let addButton = addProductButton;

  if (open) {
    addButton = addProductScreen;
  }

  return (
    <div className="container">
      {addButton}
      {productItems}
    </div>
  );
};

export default P_info;
