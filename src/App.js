import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Authorization from './Components/Authorization'
import BotsState from './Components/BotsState'
import AddBots from './Components/AddBots'

const App = () => {
  const [autorize, setAutorize] = useState(false);
  const [login, setLogin] = useState('');
  const [add_bots, setBots] = useState(false);
  return (
    <div>
      <Authorization setAutorize={setAutorize} setLogin={setLogin}/>
      {autorize && <BotsState add_bots={add_bots} setBots={setBots} login={login}/>}
      {add_bots && <AddBots login={login}/>}

      {console.log(login)}
      {console.log(autorize)}
      {console.log(add_bots)}
    </div>
  )
};

export default App;
