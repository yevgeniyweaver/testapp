import React, { useState, useEffect } from 'react';
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

export default function MainPage({ location }) {

    const [lang, setLang] = useState();
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

    }

    return (
        <div>
            <NavBar location={location} />
            <Header
                isOpen={true}
                hanleClick={hanleClick}
                showForm={true}
                didCompleted={false}
                isCompleted={false}
            />
        </div>
    )
}
