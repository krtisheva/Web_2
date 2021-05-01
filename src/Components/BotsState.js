import users from '../Jsons/Users.json'
import bots from '../Jsons/Bots.json'
import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'
import './Authorization.css'

const getBotsByLogin = (login) => {
  let user_bots_id
  for (let j = 0; j < users.length; j++){
    if (users[j].login === login)
      user_bots_id = users[j].bots
  }
  
  let list_bots = []
  for (let i = 0; i < user_bots_id.length; i++){
    for (let j = 0; j < bots.length; j++){
      if (bots[j].id === user_bots_id[i])
      list_bots.push(bots[j])
    }
  }
  return list_bots
}

export default class BotsState extends Component {
  render() {
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
              {(getBotsByLogin(this.props.login)).map(bot => (
                <tr>
                  <td>{bot.token}</td>
                  <td>{bot.state.status}</td>
                  <td>{bot.state.mood}</td>
                  <td>{bot.state.mode}</td>
                  <td>{bot.cfg}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <button className="button" onClick={()=>{this.props.setBots(this.props.add_bots === true ? false : true)}}>Добавить нового бота</button>
        </div>
      </Container>
    );
  }
}