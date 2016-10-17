import React, {Component} from 'react'
import franc from 'franc'

import ResultsArea from './ResultsArea'

const ResultsPage = React.createClass({
  getInitialState() {
    return {inputData: 'No Input Yet', francResults: []}
  },

  render() {
    return (
        <div>
          <input id="in" onChange={this.handleChange}></input>
          <ResultsArea francResults={this.state.francResults}/>
        </div>
    )
  },

  handleChange(event) {
    const results = franc.all(event.target.value)
    this.setState({inputData: event.target.value, francResults: results})
  }
})

export default ResultsPage