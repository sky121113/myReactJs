// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
type Props = {
    text:'333'
}
class testShow extends Component<Props> {
    render() {

    return (
        <h1>{this.props.text}</h1>
        );
    }
}

testShow.propTypes = {
    text: PropTypes.string
  }

export default testShow