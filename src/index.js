//import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './include/Header';
import Home from './pages/Home';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';

// 라우터 선언
import {BrowserRouter, Routes, Route} from "react-router-dom";

// 부트스트랩 cdn 선언
import "bootstrap/dist/css/bootstrap.min.css";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path='container' element={<Cont/>}/>
          <Route path='typo' element={<Typo/>}/>
          <Route path='color' element={<Color/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
// 위의 이 문법은 리액트 18버전부터 