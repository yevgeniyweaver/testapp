import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../scss/Form.scss';

export default class Form extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        hanleClick: PropTypes.func.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        didCompleted: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        //alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }
    // handleSubmit(event){
    //     alert('Отправленное имя: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        let ms = 1e-6;
        console.log(ms);
      
        let num = 1.23456;

        console.log( Math.floor(num * 100) / 100 );
        console.log( num.toFixed(2));
        function commit(name){
            console.log(name);
        } 
        function commit2(name){
            console.log(name);
        }
        





        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <div className="">{this.state.value}</div>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
