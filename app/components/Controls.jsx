var React = require('react');

// this controls component is going to be passed down the countdown status.
// it needs to dynamically render the button.
// when the countdownStatus is started, we want to render the pause button,
// when the countdownStatus is stopped, we want to render the start button,



var Controls = React.createClass({
    // Will have a prop passed down.
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired // tells what kind of primitive is expected
    },
    render: function() {
        var {countdownStatus} = this.props;

        // render the proper button depending on the countdownStatus.
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary">Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button className="button primary">Start</button>
            }
        };
        return (
            <div>
            {renderStartStopButton()} {/*render the start or stop button */}
            <button className="button alert hollow">Clear</button>
            {/*we cannot set conditional statements on jsx code.*/}
            {/*we need to define a new function, that would return the code I'd like to run,*/}
            {/*then call the function inside the jsx.*/}
            </div>
        )
    }
});

module.exports = Controls;