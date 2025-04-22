//URL파라미터를 사용하여 다국어 지원을 위한 경로 만들기
//EX) /:lang/home으로 언어코드를 받아서 해당 언어에 맞는 내용을 보여줌
//ex) /eng/home, /kor/home

import { useParams, Link } from "react-router-dom";

//컴포넌트 이름은 Home

const Home = () =>{
    const {lang} = useParams();
    const content = {
        ko: {
        greeting: '안녕하세요!',
        description: '이것은 한국어 페이지입니다.',
        },
        en: {
        greeting: 'Hello!',
        description: 'This is an English page.',
        },
        jp: {
        greeting: 'こんにちは！',
        description: 'これは日本語のページです。',
        },
    };

    const languageContent = content[lang];

    return(
        <div>
            <h2>{languageContent.greeting}</h2>
            <p>{languageContent.description}</p>
        </div>
    )
} 

//상품별 카테고리와 상품 상세 페이지 구현하기
//카테고리 별 상품들이 나오게 만들자
// 카테고리 경로 : /categories/:categorild
// 상품 상세 경로 : /categories/:categorild/products/:productld

//카테고리 컴포넌트 <Categories/>
//상품목록 컴포넌트 <Products />
//상품상세페이지 <ProductDetail />
const Categories = () => {
    const categories = [
        { id: 1, name: '전자제품' },
        { id: 2, name: '의류' },
        { id: 3, name: '식료품' },
        ];

        return (
            <div>
                <h1>카테고리 목록</h1>
                <ul>
                    {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        )
}

const Products = () =>{
    const {categoryId} = useParams();

    const products = [
        { id: 1, name: '노트북', categoryId: '1' },
        { id: 2, name: '스마트폰', categoryId: '1' },
        { id: 3, name: '셔츠', categoryId: '2' },
        { id: 4, name: '청바지', categoryId: '2' },
        { id: 5, name: '사과', categoryId: '3' },
        { id: 6, name: '우유', categoryId: '3' },
        ];

        const filteredProducts = products.filter(product => product.categoryId === categoryId);

        return(
            <div>
                <h1>
                    카테고리 {categoryId} 상품 목록
                </h1>
                <ul>
                    {filteredProducts.map(product => (
                    <li key={product.id}>
                        <Link to={`/categories/${categoryId}/products/${product.id}`}>{product.name}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        )
}

const ProductsDetail = () => {
    const { categoryId, productId} = useParams();

    const p_detail = [
        { id: 1, name: '노트북', description: '최신형 노트북입니다.', categoryId: '1' },
        { id: 2, name: '스마트폰', description: '최신 스마트폰입니다.', categoryId: '1' },
        { id: 3, name: '셔츠', description: '멋진 셔츠입니다.', categoryId: '2' },
        { id: 4, name: '청바지', description: '편안한 청바지입니다.', categoryId: '2' },
        { id: 5, name: '사과', description: '신선한 사과입니다.', categoryId: '3' },
        { id: 6, name: '우유', description: '신선한 우유입니다.', categoryId: '3' },
        ];

    const product = p_detail.find(
        item => item.id === Number(productId) && item.categoryId === categoryId
    );

    return(
        <div>
            <h1>{product.name}</h1>
            <p>카테고리 ID: {categoryId}</p>
            <p>상품 ID : {productId}</p>
            <p>상품 설명: {product.description}</p>
        </div>
    );
}
export{Home,Products,Categories,ProductsDetail};
