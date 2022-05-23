import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Forum from './components/Forum/Forum';
import Header from './components/Header/Header';
import Yozuvchilar from './components/Main/Yozuvchilar/Yozuvchilar';
import Main from './components/Main/Main';
import Maqolalar from './components/Maqolalar/Maqolalar';
import Nasr from './components/Nasr/Nasr';
import Nazm from './components/Nazm/Nazm';

import obj from './badiiyat.js'
import { useState } from 'react';

function App() {

  const [newObj, setNewObj] = useState([...obj]);

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element = {<Main /> } />
          <Route path="nasr" element = {<Nazm />} />
          <Route path="nazm" element = {<Nasr />} />
          <Route path="maqolalar" element = {<Maqolalar />} />
          <Route path="forum" element = {<Forum />} />
          <Route path="yozuvchilar/:id" element = {<Yozuvchilar newObj={newObj} />} />
      </Routes>
    </>
  );
}

export default App;
