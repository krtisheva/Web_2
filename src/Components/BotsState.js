import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'
import './Authorization.css'

const getBotsByLogin = async(login) => {
  try {
    const response = await fetch(`http://localhost:8080/bots/${login}`,{
    method: "GET",  
    headers: {"Access-Control-Allow-Origin": `*`}});
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.error(err.message);
  }
}

const addBot = async (login) => {
  try {
    let data = { "token": `${login}` }
    const response = await fetch(`http://localhost:8080/bots`,{
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }});
  } catch (err) {
    console.error(err.message);
  }
}

export default class BotsState extends Component {
  constructor(props) {
    super(props)
    this.state = []
  }

  render() {
    getBotsByLogin(this.props.login).then(value => (this.setState(value)))
    const bots = Object.values(this.state);
    return (
      <Container className="container">
        <div>
          <h3 className="mt-4">{this.props.login}: Состояние ботов</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>token</th>
                <th>status</th>
                <th>mood</th>
                <th>mode</th>
                <th>cfg</th>
              </tr>
            </thead>
            <tbody>
              { bots.map(bot => (
                <tr key={bot._id}>
                  <td>{bot.token}</td>
                  <td>{bot.state.status}</td>
                  <td>{bot.state.mood}</td>
                  <td>{bot.state.mode}</td>
                  <td>{bot.cfg}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <button className="button" onClick={()=>{addBot(this.props.login)}}>Добавить нового бота</button>
        </div>
      </Container>
    );
  }
}