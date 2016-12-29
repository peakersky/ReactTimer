var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        console.log('number of inputs ', $('input').length);
        var strSeconds = this.refs.seconds.value;
        if (strSeconds && strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            // Executes the function of its parent in Countdown.jsx
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
});

module.exports = CountdownForm;
