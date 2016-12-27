var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        // count down status, and state gets updated.
        // count gets decremented by 1
        it('should set state to started and count down', (done) => {
            // render the element
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            // Call the function
            countdown.handleSetCountdown(10); // this sets the seconds to 10. and runs the handle set countdown.
            // Test if the countdown received 10 as the parameter to set the count.
            expect(countdown.state.count).toBe(10);
            // the handleSetCountdown, will turn the state for countdownStatus to 'started'
            expect(countdown.state.countdownStatus).toBe('started');
            // This will trigger the startTimer function, and count gets updated after 1 second.
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
            // this setTimeout function is asynchronous and the test will because mocha doesn't support asynchronous tests.
            // A fix to this is to pass 'done' as the argument, which tells mocha that there is asynchronous testing.
            // Insert the done() after the setTimeout finishes.
        });
        it('should nver set count less than zero', (done) => {
            // we must test that the count will not become a negative number.
            // Create the element.
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            // call the function
            countdown.handleSetCountdown(1);
            // Test for the count to be 0 after 3 seconds.
            setTimeout(() => {
                expect(countdown.state.count).toBe(0)
                done();
            }, 3001)
        })
    });
});


