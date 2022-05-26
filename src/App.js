import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Forum from './components/Forum/SingUp';
import Header from './components/Header/Header';
import Yozuvchilar from './components/Main/Yozuvchilar/Yozuvchilar';
import Main from './components/Main/Main';
import Maqolalar from './components/Maqolalar/Maqolalar';
import Nasr from './components/Nasr/Nasr';
import Nazm from './components/Nazm/Nazm';

import obj from './badiiyat.js'
import { useState } from 'react';
import BookInfo from './components/Main/BooksInfo/BookInfo';
import Profil from './components/Profil/Profil';
import SignIn from './components/Forum/SingIn';

function App() {

  const [newObj, setNewObj] = useState([...obj]);

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element = {<Main /> } />
          <Route path="nazm" element = {<Nazm />} />
          <Route path="nasr" element = {<Nasr newObj = {newObj} />} />
          <Route path="maqolalar" element = {<Maqolalar />} />
          <Route path="forum" element = {<Forum />} />
          <Route path="yozuvchilar/:id" element = {<Yozuvchilar newObj={newObj} />} />
          <Route path="/asarlar/:bookId" element = {<BookInfo bookArr = {newObj}/>} />
          <Route path="profil" element = {<Profil />} />
          <Route path="signin" element = {<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
