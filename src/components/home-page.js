import React from 'react'
import CalendarContainer from '../containers/calendar-container';
import './home-page.scss';
import ModalContainer from '../containers/modal-container';


const HomePage = ({showModal}) => {
    
        return (
            <> 
             <section className="home-page">
                 <div className="home-page-description">
                     <h1 className="home-page-title">
                         Choose the day<br/>
                         for the meeting
                     </h1>
                     <p className="home-page-text">
                      We encourage you to book your<br/>
                      appointment online.<br/> 
                      This will save you time.
                     </p>
                 </div>
                 <CalendarContainer/> 
                 { showModal ? <ModalContainer/> : null}   
             </section>
           </>  
         );
};

export default HomePage;

