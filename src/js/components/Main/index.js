import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { useTranslation } from 'react-i18next';

import NavBar from '../../components/NavBar';
// import FlowForm from '../components/FlowForm';
// import CookieBanner from '../components/CookieBanner';
import Header from '../../components/Header';
import Form from "../Form";
// import FlowComponent from '../components/FlowComponent';
// import Portfolio from '../components/Portfolio';
// import Reviews from '../components/Reviews';
// import ContactUs from '../components/ContactUs';
// import Footer from '../components/Footer';


const modalRoot = document.getElementById('modal-root');
class Modal extends React.Component {
    constructor(props) {
        super(props);
        // Create a div that we'll render the modal into. Because each
        // Modal component has its own element, we can render multiple
        // modal components into the modal container.
        this.el = document.createElement('div');
    }
    componentDidMount() {
        // Append the element into the DOM on mount. We'll render
        // into the modal container element (see the HTML tab).
        modalRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        // Remove the element from the DOM when we unmount
        modalRoot.removeChild(this.el);
    }
    render() {
        // Use a portal to render the children into the element
        return ReactDOM.createPortal(
            // Any valid React child: JSX, strings, arrays, etc.
            this.props.children,
            // A DOM element
            this.el,
        );
    }
}
// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.el = document.createElement('div');
//     }
//     componentDidMount() {
//         // Элемент портала добавляется в DOM-дерево после того, как потомки компонента Modal будут смонтированы, это значит, что потомки будут монтироваться на неприсоединённом DOM-узле.
//         // Если дочерний компонент должен быть присоединён к DOM-дереву сразу при подключении, например, для замеров DOM-узла, или вызова в потомке 'autoFocus', добавьте в компонент Modal
//         // состояние и рендерите потомков только тогда, когда компонент Modal уже вставлен в DOM-дерево.
//         modalRoot.appendChild(this.el);
//     }
//     componentWillUnmount() {
//         modalRoot.removeChild(this.el);
//     }
//     render() {
//         return ReactDOM.createPortal(
//             this.props.children,
//             this.el
//         );
//     }
// }

export default function MainPage({ location }) {

    const [lang, setLang] = useState();
    const [number, setNumber] = useState(false);
    const [showFloatingForm, setShowFloatingForm] = useState(false);

    // useEffect(() => {
    //     if (isEnglish()) {
    //         i18n.changeLanguage('en');
    //         setLang('en');
    //     } else {
    //         i18n.changeLanguage('en');// i18n.changeLanguage('de');
    //         setLang('en'); // setLang('de');
    //     }
    // }, [i18n])
    useEffect(() => {
        if (localStorage.getItem('allowCookie') === 'true') { setShowFloatingForm(true) }
    }, [])
    useEffect(() => {
        // if (location.state) { window.scrollTo(0, location.state.scroll) }
    }, [])
    const isEnglish = () => {
        let path = window.location.pathname;
        return (/(\/en)/g).test(path);
    }
    const hanleClick = () =>{
        setNumber(!number);
        console.log(number)
    }
    let style =  {
        backgroundColor: number ? 'red' : 'blue',
        color: number ? 'white' : 'yellow',
        borderRadius: '7px',
        padding: '5px 6px'
    }

    return (
        <div>
            <div>
                <p style={style}>Your Count Numbers {number} </p>
                <button onClick={() => hanleClick() }> SetNumber</button>
                <br/> <br/>
            </div>
            
            <NavBar location={location} />
            <Header
                isOpen={true}
                hanleClick={hanleClick}
                didCompleted={false}
                isCompleted={false}
            />
        </div>
    )
}
