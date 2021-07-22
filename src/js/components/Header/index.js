import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isEmptyObject, isSum } from './../../scripts/functions'
import { varLet } from './../../scripts/es6'

import Form from '../../components/Form';
// import { useTranslation } from 'react-i18next';
// import { Link as ScrollLink } from 'react-scroll';
//import { Materials, PlanOfCourse, Images, afterCourseBlock } from '../../config/qaengine';
// import '../../style/animation/DesktopPhoneAnimation.scss';
import '../../../scss/Header.scss';

export default class Header extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        hanleClick: PropTypes.func.isRequired,
        // showForm: PropTypes.func.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        // didCompleted: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
            name: '',
            phone: '',
            email: '',
            clicked: false,
            error: false,
            distance: "",
            isOpen: false,
            liKey:null,
            liPrev:null,
            users: {},
            numbersObj: [
                { title: "queve", dropdown: "first drop content" },
                { title: "start date", dropdown: "second drop content" },
                { title: "end date", dropdown: "third drop content" },
                { title: "hour range", dropdown: "first drop content" },
                { title: "period", dropdown: "fifth drop content" },
                { title: "sixth", dropdown: "sixth drop content" },
            ],
            objects: [
                { id: 201, title: "ЖК Розенталь", dropdown: "first drop content" },
                { id: 202, title: "Пространство на Неделина", dropdown: "second drop content" },
                { id: 203, title: "ЖК Малинки", dropdown: "third drop content" },
                { id: 204, title: "41 Жемчужина", dropdown: "first drop content" },
                { id: 205, title: "ЖК Острова", dropdown: "fifth drop content" },
                { id: 206, title: "ЖК Кандинский", dropdown: "sixth drop content" },
            ]
        };
    }
    onBtnClick = () => {
        this.setState({ clicked: !this.state.clicked });
        console.log(this.state.clicked)
        const body = document.querySelector('body');
        if (!this.state.clicked) {
            body.setAttribute('style', 'background-color: #a1a1a1');
        } else {
            body.removeAttribute('style');
        }
    }
    onListClick = (key) => {
        let prev = this.state.liKey;
        this.setState({ liKey: key});
        if (this.state.isOpen && key === prev) {
            this.setState({ isOpen: false });//return;
        } else { this.setState({ isOpen: true } ) }
        /* this.setState((state) => ({ liPrev: state.liKey })); */
    }

    onNameChange = (e) => {
        let name = e.target.value;
        this.setState({ name: name});
    }
    onIdChange = (e) => {
        let id = parseInt(e.target.value);
        this.setState({ userId: id});
    }
    onPhoneChange = (e) => {
        let phone = e.target.value;
        this.setState({ phone: phone});
    }
    onEmailChange = (e) => {
        let email = e.target.value;
        this.setState({ email: email});
    }

    onGetData = async (e) => {
        e.preventDefault();
        let phone = this.state.phone
        let email = this.state.email
        // console.log(phone)
        // console.log(email)

        // let res = phone.match(/var/gi)

        let errors = {}
        const errorField = (field) => {
            let elem = document.getElementsByName(field)
            elem[0].style.borderColor = 'red'
        }
        const inactiveField = (field) => {
            let elem = document.getElementsByName(field)
            elem[0].style.borderColor = ''
        }
        const testInput = (key, value, rule) => {
            if(!value.match(rule) || !value){
                errors[key] = 'invalid'
                errorField(key)
                return true
            }
            if(key in errors) delete errors[key]
            inactiveField(key)
            return false
        }
        // testInput('phone', phone, maskObject.phoneMask)
        // testInput('email', email, maskObject.emailMask)
        // console.log(Object.entries(errors).length )
        // if(errors.length === 0){
        //     console.log('error')
        // }

        let users
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) { // если HTTP-статус в диапазоне 200-299
            users = await response.json(); // получаем тело ответа (см. про этот метод ниже)
        } else {
            alert("Ошибка HTTP: " + response.status);
        }

        const findUser = (id) => {
            let userOne = users.find((item, index, array) => {
                if(item.id === id){
                    return item
                }
            })
            const greet = () => {
                let surname = 'Dallas';
                console.log(`My name is: ${this.name}  ${surname}`);
            }
            // additional function for user
            let userAdds = {
                greet: greet,
                hello(){
                    console.log(`Hello ${this.name}`)
                }
            }
            userAdds.liveIn = function() {
                console.log(`${this.name} live in ${this.address.city} ${this.address.street}`);
            };
            userAdds.workIn = function() {
                console.log(`${this.name} work in: ${this.company.name}`);
            };
            let fullUser = Object.assign({}, userOne, userAdds)
            // console.log(fullUser)
            // fullUser.liveIn()
            // fullUser.workIn()
            varLet(userOne)
        }
        findUser(this.state.userId)

        let fruits = [[2,4,5], {"fruit":"sliva"}, (f)=>{return f }, "Апельсин", "Слива",];
       // console.log(fruits.toString())
        var is_array = function(input) {
            if (toString.call(input) ==="[object Array]")
                return true;
            return false;
        };
        //console.log(toString.call("sd"))


        //user2.full?.()
        //console.log(user2.full?.())
        // let vasia = user;

        let person2 = {}; // новый пустой объект
        // for (let key in person) {
        //     person2[key] = person[key];
        // }

        // let personNew = {}
        // //let clone = Object.assign({}, person, person2);
        // for(let key in person2){
        //     if(typeof person2[key] === 'object'){
        //         for(let key2 in person2[key]){
        //             console.log(person2[key])
        //             personNew[key][key2] = person2[key][key2]
        //             // if (person2[key].hasOwnProperty(key2)) {
        //             // }
        //         }
        //     }else{
        //         personNew[key] = person2[key]
        //     }
        // }
        // console.log(personNew)
    }

    onGetStatus = (e) => {
        e.preventDefault();
        let inputName =  this.state.name;
        const statusArr = {
            200:' Ok',
            300:' Redirect',
            304:' Not modified',
            400:' Bad request',
            404:' Not found',
            401:' Unauthorized',
            empty:' Status not found'
        }
        async function findStatus(){
            //return Promise.reject(401)
            let promise = new Promise((resolve, reject) => {
                if(inputName < 400){
                    setTimeout(() => resolve(inputName), 800)
                }
                setTimeout(() => reject(inputName), 1700)
            });

            let status = ''
            try {
                status = await promise; // будет ждать, пока промис не выполнится (*)
            } catch(err) {
                status = err
                alert(err); // TypeError: failed to fetch
                return Promise.resolve(err);
            }
            return status
        }
        findStatus()
          .finally(console.log('loading response'))
          .then(
            (status) => {
                if(statusArr[status]){
                    console.log(status.toString()+statusArr[status])
                }else{
                    console.log(status.toString()+statusArr['empty'])
                }
            },
            (error) => {
                console.log('error '+error.toString()+statusArr[error])
            }
          )
    }


    render(){
        let { clicked, isOpen, userId } = this.state;
        let listClass = "list-item";
        let listDrop = "list-drop";
        let listDropActive = "list-drop-active";

        let favArr = [];
        let addToFav = (id) => {
            if(id !==0){
                console.log(id);
                if(!favArr[id]){
                    favArr.push(id);
                }
                console.log(favArr['+id+']);
            }
        }
        // function validateForm() {
        //     var x = document.forms["myForm"]["fname"].value;
        //     if (x === "") {
        //         alert("Name must be filled out");
        //         return false;
        //     }
        // }
        const listItems = this.state.numbersObj.map((item, key) =>
            <li className={listClass} key={key} onClick={() => this.onListClick(key.toString())}>
                <div className="list-title">{item.title} item</div>
                <div className={(isOpen && this.state.liKey === key.toString() )? listDropActive : listDrop}>{item.dropdown}</div>
            </li>
        );
        const ulBlock = <ul className="list-box">{listItems}</ul>;
        const objectItem = this.state.objects.map((item, key) =>
            <li className={listClass} key={key} onClick={() => addToFav(item.id.toString())}>
                <div className="list-title">{item.title} item</div>
                <div className={(isOpen && this.state.liKey === key.toString() )? listDropActive : listDrop}>{item.dropdown}</div>
            </li>
        );
        const objectsBlock = <ul className="list-box">{objectItem}</ul>;

        // const testForm =
        //     <div className="form-box">
        //         <form name="myForm" action="" onSubmit={()=>validateForm()} method="post">Name: <input type="text" name="fname" /><input type="submit" value="Submit" /></form></div>;

        return (
            <div className="main-bg">
                <div className='header-container container-fluid'>
                    <div className='header-wrapper container'>
                        <div className='header-main row justify-content-md-between justify-content-sm-center'>
                            {/*{testForm}*/}
                            <Form
                                isOpen={this.props.isOpen}
                                hanleClick={this.props.hanleClick}
                                isCompleted={this.props.isCompleted}
                                didCompleted={this.props.didCompleted}
                            />
                            {/*<form onSubmit={this.onGetStatus}>*/}
                            {/*    <input name="name" onChange={this.onNameChange}/>*/}
                            {/*    <input className="btn-gray"  type="submit" placeholder="ADD Item"/>*/}
                            {/*</form>*/}

                            {/*<form id="testForm_1" onSubmit={this.onGetData}>*/}
                            {/*    <input name="phone" onChange={this.onPhoneChange}/>*/}
                            {/*    <input name="email" onChange={this.onEmailChange}/>*/}
                            {/*    <input className="btn-gray"  type="submit" placeholder="ADD data"/>*/}
                            {/*</form>*/}

                            {/*<form id="findForm_1" onSubmit={this.onGetData}>*/}
                            {/*    <input name="id" onChange={this.onIdChange} defaultValue={userId}/>*/}
                            {/*    <input className="btn-gray"  type="submit" placeholder="ADD data"/>*/}
                            {/*</form>*/}

                            {/*{clicked &&*/}
                            {/*    <div className="btn-yellow">Open</div>*/}
                            {/*}*/}
                            {/*<h2 className='header-suptitle'>Distribution Summary</h2>*/}
                            {/*{ulBlock}*/}
                            {/*{objectsBlock}*/}

                            <div className='header-main-titleBlock col-md-5 text-center text-md-left col-sm-10'>
                                {/*<h1 className='header-title'>header title</h1>*/}
                            </div>

                            <div className='header-graphic col-lg-6 col-md-6'>
                                {/*<DesktopPhone svgClass='desktop-phone d-lg-block d-none' />*/}
                                {/*<MobilePhone svgClass='mobile-phone d-none d-md-block d-lg-none' />*/}
                            </div>
                            {/*<div className='header-main-titleBlock col-md-5 text-center text-md-left col-sm-10'>*/}
                            {/*    <h2 className='header-suptitle '>{t('header.suptitle1')}<br />{t('header.suptitle2')}</h2>*/}
                            {/*    <h1 className='header-title'>{t('header.title1')}<br />{t('header.title2')}</h1>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
