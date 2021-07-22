import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../scss/Form.scss';
import { initUsers } from '../../data/initUsers'
import '../../../scss/Header.scss';

export default class Form extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        hanleClick: PropTypes.func.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        didCompleted: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            name: '',
            namePlaceholder: 'ex: John',
            message: '',
            messagePlaceholder: 'write something'
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }

    componentDidMount(){
        this.setUsers();
        document.body.scrollTop = 188;
    }

    setUsers = async() => {
        const users = await initUsers();
        this.setState({ users : users });
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value});
    }
    onChangeMessage = (event) => {
        this.setState({message: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
    }
    onClickForm = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.currentTarget)
    }
    nameClick = (event) => {
        event.stopPropagation();
    }
    messageClick = (event) => {

    }

    render() {
        let { namePlaceholder, messagePlaceholder, users, isOpen } = this.state
        console.log(users)
        let listClass = "list-item";
        let listDrop = "list-drop";
        let listDropActive = "list-drop-active";
        let UsersList;
        if(users){
            const usersItems = users.map((item, key) =>
              <li className={listClass} key={key}>
                  <div className="list-title listDrop">{item.name} item</div>
              </li>
            );
            UsersList = <ul className="list-box">{usersItems}</ul>;
        }

        return (
          <div>
              <form id="form_1" onSubmit={this.onSubmit} onClick={this.onClickForm}>
                  <label>
                      <div className="">Name</div>
                      <input type="text" name="name" value={this.state.name} onChange={this.onChangeName} placeholder={namePlaceholder} onClick={this.nameClick} />
                  </label>
                  <label>
                      <div className="">Message</div>
                      <input type="text" name="message" value={this.state.message} onChange={this.onChangeMessage} placeholder={messagePlaceholder} onClick={this.messageClick}/>
                  </label>
                  <input type="submit" value="Send" />
              </form>
              {users && users.length && UsersList}
          </div>
        );
    }
}
