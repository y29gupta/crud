import React from 'react';
import {BrowserRouter  , Routes,Route} from 'react-router-dom'
import Menu from './component/Menu';
import Home from './component/Home';
import Create from './component/Create';
import NotFound from './component/NotFound';
import Update from './component/Update';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
      <ToastContainer autoClose={2000}  position={'top-center'}></ToastContainer>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/Create' element={<Create/>}/>
        <Route exact path='/Update/:id' element={<Update/>}/>
        <Route exact path='/*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
