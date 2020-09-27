import React, {Component} from 'react';
import * as calendar from './calendar';
import classnames from 'classnames';
import './index.scss';


export default class Calendar extends Component {

    static defaultProps = {
        date: new Date(),
        years: [2018, 2019, 2020, 2021],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    };
    
    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null,
        onChange: Function.prototype
    };

    get year() {
        return this.state.date.getFullYear();
    };

    get month() {
        return this.state.date.getMonth();
    };

    get day() {
        return this.state.date.getDate();
    };

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        
        this.setState({ date });
    };


    handleDayClick = (date) => {
        this.setState({selectedDate: date});
        // this.props.onChange(date);
        // this.props.toggleModal();
        this.props.changeDate(date);

        this.props.toggleModal();
    }

    render() {
        const { monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return(
            <div className="calendar">
                <header className="header-calendar">
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>
                    <div>
                        <span className="header-month">{monthNames[this.month]}</span>
                        <span className="header-year">{this.year}</span>
                    </div>    
                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </header>
                <div className='table'>
                    <table>
                        
                        <tbody>
                                {monthData.map((week, index) =>
                                        <tr key={index} className="week">
                                            {week.map((date, index) => date ?
                                                <td
                                                    key={index}
                                                    className={classnames('day', {
                                                        'today': calendar.areEqual(date, currentDate),
                                                        'selected': calendar.areEqual(date, selectedDate)
                                                    })}
                                                    onClick={() => this.handleDayClick(date)}
                                                    
                                                >{date.getDate()}</td>
                                                :
                                                <td key={index} />
                                            )}
                                        </tr> 
                                    )}
                        </tbody>
        
                        <tfoot>
                            <tr>
                                {weekDayNames.map(name =>
                                    <th key={name}>{name}</th>    
                                )}
                            </tr>
                        </tfoot>
                    </table>
                </div>    
            </div>
        )
    }
}