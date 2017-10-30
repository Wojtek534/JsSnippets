// zzComponentFull
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Page extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div></div>
        );
    }
}

Page.propTypes = {
    //myProp: PropTypes.string.isRequired;
};

function mapStateToProps(state, ownProps) {
    return {state: state};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(YourImportedActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);