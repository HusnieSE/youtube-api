import React, { Component } from 'react';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';
import * as Action from '../actions/index';

class MainComponent extends Component {

    render() {
        return(
            <div>
                <h1> Sample </h1>
            </div>
        )
    }
}

function mapStateToProps (state, prop) {
    return {

    }
}

function mapDispatchToProps(Dispatch) {
    return {

    }
}

export default connect(mapDispatchToProps, mapStateToProps)(MainComponent)