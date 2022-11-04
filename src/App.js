import React from 'react';
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub03 from './pages/Sub03';
import Board from './pages/Board';
import Footer from './pages/Footer';
import { Route, Routes } from 'react-router-dom';
import './css/basic.scss';
const COMPANY = {
  name: "OCI",
  address: "04532 서울시 중구 소공로 94 OCI빌딩",
  number: "606-11-45081",
  tel: "051-331-3354",
  email: "OCI@gmail.com"
}
export { COMPANY };

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sub01' element={<Sub01 />} />
        <Route path='/sub02' element={<Sub02 />} />
        <Route path='/sub03' element={<Sub03 />} />
        <Route path='/board' element={<Board />} />
      </Routes>
      <Footer content={COMPANY} />
    </Wrapper>
  )


}
export default App;
