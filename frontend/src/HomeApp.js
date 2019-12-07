import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HeaderMenu from './components/HeaderMenu';
import MainSlideShow from './components/MainSlideShow';
import MainGoods from './components/MainGoods'
//import Swipe from './components/Swipe';
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from "./components/slavesPhotos/KakaoTalk_20191008_201726162.jpg"
import image2 from "./components/slavesPhotos/003.jpg"
import "./HomeApp.css";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
    scrollingSpeed = {1000} /* Options here */
    fixedElements = '.elementHead'
    sectionsColor = {['#ccc','white']}
    paddingTop= '10px'

    render={({ state, fullpageApi }) => {
      return (
        <div>  
        <div className="elementHead">
        <HeaderMenu/>
        </div>
        <ReactFullpage.Wrapper>
          <div className="section">
          <MainSlideShow/>
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <MainGoods/>
          </div>  
          <div className="section">
          <iframe src="https://snapwidget.com/embed/758466" className="snapwidget-widget" allowtransparency="true" frameBorder="0" scrolling="no" style={{ border: 'none', overflow:'hidden', width:'80%',height:'25%'}}>
        </iframe>
        <a href = "https://www.instagram.com/trackline_korea/" target = "_blank">
        <img className = "insta" src="insta.png" width="3%"></img></a>
        <a href = "https://open.kakao.com/o/sDb6VVBb" target = "_blank">
        <img className = "kakao" src="kakao.png" width="3%"></img></a>
          </div>
        </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
);

//ReactDOM.render(<Fullpage />, document.getElementById('react-root'));

export default Fullpage;