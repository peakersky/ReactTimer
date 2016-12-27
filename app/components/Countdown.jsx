var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            count:0,
            countdownStatus: 'stopped' // the state where its not counting down.
        };
    },
    // this function gets called when either props or state gets updated.
    componentDidUpdate: function(prevProps, prevState) {
        // when countdownStatus is changed to 'started',
        // this.state.countdownStatus === 'started'
        // this.prevState.countdownStatus === 'stopped'
        // Once 'state' and 'prevState' are different we know that something has happened to trigger state,
        // and we can use this the difference in state to execute a function.
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) { // Pass the argument you want to check.
                case 'started': // if the argument is 'started' run the function below.
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count:0});
                    // didn't use break so it would execute towards paused.
                case 'paused':
                    clearInterval(this.timer); // cancel the setInterval from timer
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    },
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started' // Start the counting down!
            // how do we listen for this change of state for countdownStatus going from 'stopped' to 'started'?
            // We can do this through component lifecycle methods.
            // These are methods, built in to all react components that get executed automatically by react, when
            // certain things happen to your component, such as when it gets shown into the browser or it gets removed.
            // There is also another component lifecycle method that gets called when the state gets updated.
        })
    },
    handleStatusChange: function (newStatus) {
        this.setState({countdownStatus: newStatus})
    },
    render: function() {
        var {count, countdownStatus} = this.state;

        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        };
        return (
            <div>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        )
    }
});

module.exports = Countdown;