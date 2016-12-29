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
        // Execute the function that gets passed down from the render function.
        // Execute the parent function Countdown.jsx, and pass it the new status.
            this.props.onStatusChange(newStatus); // the newStatus is whatever argument was passed in the onClick event handler.
        }
    },
    render: function() {
        var {countdownStatus} = this.props;

        // render the proper button depending on the countdownStatus.
        var renderStartStopButton = () => {
            // when the countdownStatus is 'started', we want to render the pause button,
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            // when the countdownStatus is 'paused', we want to render the start button,
          } else if (countdownStatus === 'paused' || 'stopped') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };
        return (
            <div className="controls">
            {renderStartStopButton()}
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
});

module.exports = Controls;
