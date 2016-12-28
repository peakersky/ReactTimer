var React = require('react');

// this controls component is going to be passed down the countdownStatus.
// it needs to dynamically render the button.



var Controls = React.createClass({
    // Will have a prop passed down.
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newStatus) {
        // onClick expects a function definition, but we are calling the function directly in the render method.
        // the return value from the onStatusChange will be called when the person clicks the button.
        // Therefore, we want to return a function definition, which will be the actual function that is called when
        // the user clicks the button.
        // function currying - using a function to generate another function.
        return () => {
        // Execute the function that gets passed down from the parent via the props.
            this.props.onStatusChange(newStatus); // the newStatus is whatever argument was passed in the onClick event handler.
        }
    },
    render: function() {
        var {countdownStatus} = this.props;

        // render the proper button depending on the countdownStatus.
        var renderStartStopButton = () => {
            // when the countdownStatus is 'started', we want to render the pause button,
            // when the countdownStatus is 'stopped', we want to render the start button,
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };
        return (
            <div className="controls">
            {renderStartStopButton()} {/*render the start or stop button */}
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            {/*we cannot set conditional statements on jsx code.*/}
            {/*we need to define a new function, that would return the code I'd like to run,*/}
            {/*then call the function inside the jsx.*/}
            </div>
        )
    }
});

module.exports = Controls;