import React from 'react';
import { useState} from 'react';

function AddProduct(props){

    //상품의 정보를 저장할 수 있는 state
    const [product, setProduct] = useState({productName : "",productStock:0,productPrice:0});

    const {productName,productStock,productPrice} = product;

    let addItem = props.addItem;

    const onChange = (e) => {    
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출    
        setProduct({      
            ...product, // 기존의 input 객체를 복사한 뒤      
            [name]: value // name 키를 가진 값을 value 로 설정    
            });  
        };

    const onButtonClick = ()=>{
        console.log(product);
        addItem(product);
        resetFields();
        props.setOpen(true);
    }

    // 입력 필드 초기화 함수
    const resetFields = () => {
        setProduct({ productName: "", productStock: 0, productPrice: 0 });
    };


    return(
        <div className="register-wrap" style={{width:'500px'}}>
			<div><input style={{width: '98%'}} value={productName} onChange={onChange} name='productName' placeholder='상품 이름'/></div>
			<div><input style={{width: '98%'}} value={productStock} onChange={onChange} name='productStock' placeholder='상품 재고'/></div>
			<div><input style={{width: '98%'}} value={productPrice} onChange={onChange} name='productPrice' placeholder='상품 가격'/></div>
			<input type="button" value="등록" onClick={onButtonClick} style={{width:'100%'}} />
		</div>
    )
}

export default AddProduct;