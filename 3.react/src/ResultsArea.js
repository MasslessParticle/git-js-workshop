import React, {Component} from 'react'

const ResultsArea = React.createClass({
    render() {
        const resultsList = this.props.results.map(function (item, index) {
            return <div key={index}>{index}: {item[0]}, {item[1]}</div>
        })

        return (
            <div id="results">
                {resultsList}
            </div>
        )
    }
})

export default ResultsArea