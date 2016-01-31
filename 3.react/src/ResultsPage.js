import React, {Component} from 'react'
import franc from 'franc'
import ResultsArea from './ResultsArea'

const ResultsPage = React.createClass({
  getInitialState() {
    return {results: []}
  },

  render() {
    return (
      <div>
        <input placeholder="Enter some foreign language here" onChange={this.handleChange}></input>
        <div id="results">
          <ResultsArea results={this.state.results} />
        </div>
      </div>
    )
  },

  handleChange(event) {
    const inputText = event.target.value

    const francResults = franc.all(inputText)

    if (francResults.length > 1) {
      this.setState({results: francResults})
    }
  }
})

export default ResultsPage