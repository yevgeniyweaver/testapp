import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Form from '../../components/Form';
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
            name: '',
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
    
    onAsync = (e) => {
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
        
        async function testAsync() {
            //return Promise.reject(401)
            let promise = new Promise((resolve, reject) => {
                if(inputName < 400){
                    setTimeout(() => resolve(inputName), 800)
                }
                setTimeout(() => reject(inputName), 1700)
            });
            let user
            let response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (response.ok) { // если HTTP-статус в диапазоне 200-299
                user = await response.json(); // получаем тело ответа (см. про этот метод ниже)
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
            console.log(user)
            let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
            let res = await fetch(url);
            let commits = await res.json(); // читаем ответ в формате JSON
            console.log(commits)
            //let promise = Promise.resolve(inputName)

            
            let status = ''
            try {
                status = await promise; // будет ждать, пока промис не выполнится (*)
            } catch(err) {
                status = err
                alert(err); // TypeError: failed to fetch
                return Promise.resolve(err);
            }
            // let promise2 = new Promise((resolve, reject) => {
            //     setTimeout(() => reject('error '+inputName), 1700)
            // });
           // let error = await promise2;
           
            //return Promise.reject(inputName)
           
           //console.log(status.toString()+statusArr[status])
            //console.log(error)
            
            return status
        }
        testAsync()
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
        let { clicked, isOpen } = this.state;
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
                            {/*<Form*/}
                            {/*    isOpen={this.props.isOpen}*/}
                            {/*    hanleClick={this.props.hanleClick}*/}
                            {/*    isCompleted={this.props.isCompleted}*/}
                            {/*    didCompleted={this.props.didCompleted}*/}
                            {/*/>*/}
                            <form onSubmit={this.onAsync}>
                                <input name="name" onChange={this.onNameChange}/>
                                <input className="btn-gray"  type="submit" placeholder="ADD Item"/>
                            </form>
                         
                            {clicked &&
                                <div className="btn-yellow">Open</div>
                            }
                            <h2 className='header-suptitle'>Distribution Summary</h2>
                            {ulBlock}
                            {objectsBlock}
                            
                            
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
