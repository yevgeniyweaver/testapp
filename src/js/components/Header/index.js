import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/Form';
// import { useTranslation } from 'react-i18next';
// import { Link as ScrollLink } from 'react-scroll';
//import { Materials, PlanOfCourse, Images, afterCourseBlock } from '../../config/qaengine';

// import '../../style/animation/DesktopPhoneAnimation.scss';
import '../../../scss/Header.scss';

export default class Header extends Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        isOpen: PropTypes.bool.isRequired,
        hanleClick: PropTypes.func.isRequired,
        showForm: PropTypes.func.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        didCompleted: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            distance: "",
            isOpen: false,
            liKey:null,
            liPrev:null,
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
        // this.setState((state) => ({
        //     liPrev: state.liKey
        // }));
    }

    render(){
        let { clicked, liKey, isOpen } = this.state;
        const numbers = [1, 2, 3, 4, 5];
        let listClass = "list-item";
        let listDrop = "list-drop";
        let listDropActive = "list-drop-active";
        
        
        let value = true, value2;
        let str1 = "23ss";
        let ref = null;
        //console.log( Boolean("Привет!")); // string
        let s = +true;
        let apples = "2";
        let oranges = "3";
        //alert( +apples + +oranges ); // 5
        // let a = 1;let b = 2;let c = 3 - (a = b + 1);
        
        // let a = 1, b = 1;
        // let c = ++a; // ?
        // let d = b++; // ?
        // //alert(a+'-'+b+'-'+c+'-'+d);
        // let func = function(arg1, arg2, ...argN) {
        //     let expression = arg1 + arg2;
        //     return expression;
        // };
        // console.log(func(23,44));


        function pow(x, n) {
            if (n == 1) {
                return x;
            } else {
                return x * pow(x, n - 1);
            }
        }
        function foo(){
            let num2;
            if (true) {
                var num1 = 5;        // существуют в области видимости функции
                num2 = 10;     // существуют в области видимости блока
                let num3 = 23;       // существуют в области видимости блока
            }
            console.log(num1);
            console.log(num2);
        }
        function foo1(){
            var num1 = 5;
            const num2 = 10;
            let num3 = 23;
            function foo2(){
                console.log(num1);
                console.log(num2);
                console.log(num3);
            }
            foo2();
        }

        function foo(){
            a = a+2
            console.log(a); // 5
        }
        function bar(){
             var a = 10;
            foo();
        }
        var a = 7;

        function User(name) {
            // методом объекта становится вложенная функция
             function sayHi() {
                alert(name);
            }
        }
        let userLa = new User("John");
        //user.sayHi();
        function makeCounter() {
            let count = 0;
            return function() {
                console.log(count);
                return count=count+2; // есть доступ к внешней переменной "count"
            };
        }

        function makeWorker() {
            let name = 'Vasia';
            return function() {
                console.log(name);
            };
        }
        let name = 'Jony';
        let work = makeWorker();
        //work();

        let counter = makeCounter();

        let user = {
            firstName: "Вася",
            sayHi() {
                console.log(`Привет, ${this.firstName}!`);
            }
        };
        // Not working
        //setTimeout(user.sayHi, 1000); // Привет, undefined!
        // Working variant
        // setTimeout(function() {
        //     user.sayHi(); // Привет, Вася!
        // }, 1000);

        // setTimeout(() => user.sayHi(), 1000); // Привет, Вася!
        // user = { sayHi() { alert("Другой пользователь в 'setTimeout'!"); } };

        let user1 = {
            firstName: "Вася",
            lastName: "Petrov",
            sayGoodBye(){
                alert(`Good Bye, ${this.firstName}!`);
            }
        };
        function func() {
            alert(this.firstName+this.lastName);
        }
        let funcUser = func.bind(user1);
        //funcUser();
        let sayGood = user1.sayGoodBye.bind(user1); // Привет, Вася!
        //sayGood();


        let user2 = {
            firstName: "Вася",
            lastName: "Petrov",
            sayWord(phrase){
                alert(`${phrase} ${this.firstName}?`);
            }
        };

        let sayWord = user2.sayWord.bind(user2);
        //sayWord('What`s hapend');

        //setTimeout(sayWord('What`s hapend'), 2000); // Привет, Вася!
        let userAll = {
            name:'Petia',
            surname: 'Ivanov',
            do(phrase){
                alert(`${phrase} ${this.firstName}?`);
            },
            go(phrase){
                alert(`${phrase} ${this.firstName}?`);
            }
        }
        for (let key in userAll) {
            if (typeof userAll[key] == 'function') {
                userAll[key] = userAll[key].bind(userAll);
            }
        }
        //userAll.go();
        let str = "Kavabanba";
        let favArr = [];
        
        let addToFav = (id) => {
            if(id !=0){
                console.log(id);
                favArr.push(id);
            }
            console.log(favArr);
        }
        

        // if(str.includes('Ka',0)){
        //     console.log(str.includes('ba',5));
        // }else{
        //     console.log('str.indexOf is not defined');
        // }
        //console.log( "Fidget".startsWith("Wid") );
        
        // let sayHi = user.sayHi.bind(user); // (*)
        //setTimeout(sayHi, 1000); // Привет, Вася!

        

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
        

        return (
            <div className="main-bg">
                <div className='header-container container-fluid'>
                    <div className='header-wrapper container'>
                        <div className='header-main row justify-content-md-between justify-content-sm-center'>
                            <Form
                                isOpen={this.props.isOpen}
                                hanleClick={this.props.hanleClick}
                                isCompleted={this.props.isCompleted}
                                didCompleted={this.props.didCompleted}
                            />
                            <div className="btn-gray"  onClick={this.onBtnClick}>ADD Count</div>
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
