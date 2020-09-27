import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Header from './header';
import AboutUsPage from './about-us-page';
import HomePageContainer from '../containers/home-page-container';


const App = () => {
  
  return (
    <>
        <Header/>
        <Route path="/" exact component={HomePageContainer} />
        <Route path='/about-us' exact component={AboutUsPage} />
    </>    
  );
}

export default App;
