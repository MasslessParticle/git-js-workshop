import React, {Component} from 'react'
import {typeText} from '../actions/actions'

import ResultsArea from './ResultsArea'

const ResultsPage = React.createClass({
  getInitialState() {
    return {inputData: 'No input yet', francResults: []}
  },

  render() {
    const dispatch = this.props.dispatch
    return (
      <div>
        <input id="in" onChange={e => {this.handleChange(e, dispatch)}}/>
        <ResultsArea francResults={this.props.someSpecializedReducer} />
      </div>
    )
  },

  handleChange(event, dispatch) {
    this.setState({inputData: event.target.value})
    dispatch(typeText(event.target.value))
  }
})

export default ResultsPage