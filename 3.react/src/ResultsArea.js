import React, {Component} from 'react'

const ResultsArea = React.createClass({
    render() {
        const formattedFrancResult = this.formatFrancResults(this.props.francResults)

        return (
            <div>{formattedFrancResult}</div>
        )
    },

    formatFrancResults(francResults) {
        return francResults.map((result, index) => {
                return (
                    <div key={index}>
                        {result[0]} - {result[1]}
                    </div>
                )
            }
        )
    }
})

export default ResultsArea
