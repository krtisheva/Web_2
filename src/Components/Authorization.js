import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './Authorization.css'
import users from '../Jsons/Users.json'

const getPasswordByLogin = (login, password) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].login === login) {
      if (users[i].password === password)
      return true
    }
  }
  return false
}

class Authorization extends Component {
  constructor(props) {
    super(props)
    this.login = null
    this.password = null
  }

  render() {
    return(
      <Container className="container">
        <div>
          <h2 className="mt-5">Авторизация</h2>
          <div className="inputFieldLabel">Логин</div>
          <input className="inputField" ref={ref => this.login = ref} />
          <div className="inputFieldLabel">Пароль</div>
          <input className="inputField" type="password" ref={ref => this.password = ref} />
          <button className="button" onClick={()=>{
            this.props.setAutorize(getPasswordByLogin(this.login.value, this.password.value))
            this.props.setLogin(this.login.value)}}>Войти</button>
        </div>
      </Container>
    )
  }
}

export default Authorization;