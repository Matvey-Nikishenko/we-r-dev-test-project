import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomePage from '../components/home-page';


class HomePageContainer extends Component {
    render() {
        return (
            <HomePage showModal={this.props.showModal} />
        ) 
    }
};

const mapStateToProps = (state) => {
    return {
        showModal: state.reducer.showModal
    }
};


export default connect(mapStateToProps)(HomePageContainer);