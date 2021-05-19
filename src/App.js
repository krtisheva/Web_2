import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Authorization from './Components/Authorization'
import BotsState from './Components/BotsState'

const App = () => {
  const [autorize, setAutorize] = useState(false);
  const [login, setLogin] = useState('');
  return (
    <div>
      <Authorization setAutorize={setAutorize} setLogin={setLogin}/>
      {autorize && <BotsState login={login}/>}

      {console.log(login)}
      {console.log(autorize)}
    </div>
  )
};

export default App;
