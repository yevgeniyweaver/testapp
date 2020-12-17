import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [lang, setLang] = useState();
  const [showBanner, setShowBanner] = useState(false);
  // function margin() {
  //   const left=1, right=2, top=3, bottom=4;
  //   return { left, right, top, bottom };
  // }
  // const { left, bottom, top, right } = margin();
  const user = {firstName: 'Adrian', lastName: 'Mejia',thirdName:'Petia'};
  function getFullName({ firstName, lastName, thirdName}) {
    return `${firstName} ${lastName} ${thirdName}`;
  }
  console.log(getFullName(user)); // Adrian Mejia

  const isEnglish = () => {
    let path = window.location.pathname;
    console.log(path);
    return (/(\/en)/g).test(path);
  }

  const onAccept = () => {
    //localStorage.setItem('allowCookie', true);
    console.log(localStorage);
    // setBannerClass('cookie-banner-container accepted');
    // enableForm(true);
  }

  //  closeForm = () => {
  //   // this.setState({
  //   //   isClosed: true
  //   // })
  //   // this.reAppearTimeout = setTimeout(() => {
  //   //   this.setState({
  //   //     isClosed: false
  //   //   })
  //   // }, 60000)
  // }



  useEffect(() => {
    if (isEnglish()) {
      setLang('en');
    } else {
      setLang('de'); // setLang('de');
    }
  }, )


  console.log(lang); // 1 4

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <div className="btn-red">ADD Count</div>

      </header>
    </div>
  );
}

export default App;
