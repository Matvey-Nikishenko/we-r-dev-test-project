import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleModal} from '../actions';
import Modal from '../components/modal';

class ModalContainer extends Component {
    render () {
        return(
            <Modal month={this.props.month} day={this.props.day} toggleModal={this.props.toggleModal}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        month: state.reducer.monthNames[state.reducer.date.getMonth()],
        day: state.reducer.dayNames[state.reducer.date.getDay()]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => dispatch(toggleModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);