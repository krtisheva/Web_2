import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './Authorization.css'

const isAuthorize = async (login, pass) => {
  try {
    let data = { "password": `${pass}` }
    console.log("send POST isAuthorize");
    const response = await fetch(`http://localhost:8080/users/${login}`,{
    method: "POST",  
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": `*`}});
    const jsonData = await response.json();
    console.log(response);
    console.log(jsonData);
    if(jsonData.message === "authorized") return true; else return false;
  } catch (err) {
    console.error(err.message);
  }
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
            isAuthorize(this.login.value, this.password.value).then(value => (console.log(value), this.props.setAutorize(value)))
            this.props.setLogin(this.login.value)}}>Войти</button>
        </div>
      </Container>
    )
  }
}

export default Authorization;