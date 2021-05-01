import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './Authorization.css'

export default class AddBots extends Component {
  constructor(props) {
    super(props)
    this.id = null
    this.token = null
    this.status = null
    this.mood = null
    this.mode = null
    this.cfg = null
  }
  
  render() {

    const postBot = async (data) => {
      try {
        const response = await fetch('http://localhost:80',{
          method: "POST",  
          body: JSON.stringify(data),
          headers: {"Access-Control-Allow-Origin": 'http://localhost:3000'}});
        console.log(response);
      } catch (err) {
          console.error(err.message);
      }
    };

    return (
      <Container className="container">
        <div>
          <h3 className="mt-4">{this.props.login}: Добавить ботов</h3>
          <div className="inputFieldLabel">Введите id бота:</div>
          <input className="inputField" placeholder="id" ref={ref => this.id = ref} />

          <div className="inputFieldLabel">Введите token:</div>
          <input className="inputField" placeholder="token" ref={ref => this.token = ref} />

          <div className="inputFieldLabel">Выберите status:</div>
          <select className="select" ref={ref => this.status = ref}>
            <option>OK</option>
            <option>offline</option>
            <option>error</option>
          </select>

          <div className="inputFieldLabel">Выберите mood:</div>
          <select className="select" ref={ref => this.mood = ref}>
            <option>normal</option>
            <option>tired</option>
          </select>

          <div className="inputFieldLabel">Выберите mode:</div>
          <select className="select" ref={ref => this.mode = ref}>
            <option>off</option>
            <option>manual</option>
            <option>auto</option>
          </select>

          <div className="inputFieldLabel">Введите configuration:</div>
          <input className="inputField" placeholder="configuration" ref={ref => this.cfg = ref} />

          <button className="button mb-3" onClick={()=>{
          
            let data = {
              "user": {"login":`${this.props.login}`},
              "bot": {
                "id": `${this.id.value}`,
                "token": `${this.token.value}`,
                "state": {
                    "status": `${this.status.value}`,
                    "mood": `${this.mood.value}`,
                    "mode": `${this.mode.value}`
                },
                "cfg": `${this.cfg.value}`
              }
            }
            postBot(data)
            console.log(data)

            }}>Добавить бота!</button>
        </div>
      </Container>
    );
  }
}