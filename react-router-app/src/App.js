import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {/*Home*/About,PostDetail,UserProfile,Dashboard,Overview,Settings,NotFound,Login,PrivateRoute} from './Pages'
import {Navbar}from './Navbar'
import {Home,Categories,Products,ProductsDetail} from './Exam';
//Routes : switch같은 개념으로 가장 구체적인 경로를 우선 매칭한다
//Route : URL과 컴포넌트를 매핑하여 특정 경로에 맞는 컴포넌트를 렌더링한다

//Route 컴포넌트의 주요 속성
// 1. path
// URL 경로를 정의한다.
// 사용자가 특정 경로에 접근할 때 어떤 컴포넌트를 렌더링할지를 결정하는 데 사용된다.
// ex) path="/about"는 /about 경로에 접근할 때 렌더링할 컴포넌트를 지정한다.

// 2. element
// 경로와 일치할 때 렌더링할 컴포넌트를 지정한다. <Route> 컴포넌트가 URL 경로와 일치할 경우, element로 지정된 컴포넌트를 렌더링한다.
// 예: element={<Home />}는 / 경로에 접근할 때 <Home> 컴포넌트를 렌더링한다.
function App() {
  //아이디랑 비밀번호를 백엔드로 보내서 검증을 받았다고 가정을 한다.
  const isAuthenticated = false;

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/*라우팅그룹*/}
      <Routes>
         {/* 주소창에 path가 일치하면 컴포넌트를 렌더링한다 */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* 동적 라우팅이 되는 원리
        리액트 라우터가 내부에서 정규표현식으로 변환을 한다. */}
        {/* "/users/:userId/settings/:tab"
        /^users/([^/]+)/settings/([^/]+)$/  */}
        {/* <Route path="/users/:id" element={<UserProfile />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/posts/:postId" element={<PostDetail />}/> */}

        {/* /dashboard이하의 모든 경로를 이 라우트가 잡아낸다.
        /dashboard/overview, /dashboard/settings 등 */}
         {/* <Route path="/dashboard" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="settings" element={<Settings />} />
         </Route> */}

        {/* <Route path="/" element={<Home />} /> */}
        {/*   *의 의미 : 매칭이 되는 주소가 없을 때    */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute 
                                    element={<Home />} 
                                    isAuthenticated={isAuthenticated} />}
                                    /> */}

        {/* <Route path="/:lang/home" element={<Home />} /> */}

        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Products />} />
        <Route path="/categories/:categoryId/products/:productId" element={<ProductsDetail />} />
      </Routes> 
    </div>
  );
}

export default App;
