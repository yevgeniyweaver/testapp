import React, { useEffect, useState } from 'react';

import Logo from '../../../images/Logo.svg'

import '../../../scss/NavBar.scss';

export default function NavBar({ location }) {

    const getScroll = () => {
        if (!location.state) {
            return 0;
        } else {
            return location.state.scroll;
        }
    }

    const [link, setLink] = useState('/');
    const [currentScroll, setCurrentScroll] = useState();
    const [bgClass, setBgClass] = useState( window.outerWidth > 100 ? 'navbar-container' : 'navbar-container active');

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
        return function clean() {
            window.removeEventListener('scroll', updateScroll);
        }
    });

    // useEffect(() => {
    //     if (!isEnglish()) { setLink('/en'); }
    // }, [i18n])
    // useEffect(() => {
    //     setCurrentScroll(window.scrollY);
    //     if (window.scrollY > 100) { setBgClass('navbar-container active') }
    // }, [])
    // const isEnglish = () => {
    //     let path = window.location.pathname;
    //     return (/(\/en)/g).test(path);
    // }

    const updateScroll = () => {
        let verticalScroll = window.scrollY;
        if (verticalScroll > 100) {
            setBgClass('navbar-container active')
        } else {
            setBgClass('navbar-container')
        }
        setCurrentScroll(window.scrollY);
    }


    //className={`${bgClass} container-fluid`}

    return (
        <div>
            <div className='navbar-wrapper container-fluid'>
                <div className='row justify-content-between align-items-center'>

                    <div className='logo-container align-items-center justify-content-md-start justify-content-between'>
                        {/*<Logo svgClass='logo-img' />*/}
                        { /*<Link to={link} state={{ scroll: currentScroll }} className='lang-code'>{t('nextLang')}</Link>*/ }
                    </div>
                    <div className='link-container d-flex align-items-center justify-content-end'>

                    </div>
                </div>
            </div>
        </div>
    )
}
