import React, {Component} from 'react';
import {connect} from 'react-redux';
import Calendar from '../components/calendar';
import {toggleModal, changeDate} from '../actions';

class CalendarContainer extends Component {
    render() {
        return (
            <Calendar toggleModal={this.props.toggleModal} changeDate={this.props.changeDate} />
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeDate: (date) => dispatch(changeDate(date)),
        toggleModal: () => dispatch(toggleModal())
    }
}

export default connect(null, mapDispatchToProps)(CalendarContainer);