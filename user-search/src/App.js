import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [usuario, setUsuario] = useState('')
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response))
  }
  return (
    <Router basename = "/user-search">
      <Route path={`${process.env.PUBLIC_URL}/`} component = {App} />
    <input placeholder="helloo" value={ usuario } onChange={e => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </Router>
  );
}

export default App;