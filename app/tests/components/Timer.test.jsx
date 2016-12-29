var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');


describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('Start Timer', () => {
        it('should start timer on started status', (done) => {
            // render the element
            var timer = TestUtils.renderIntoDocument(<Timer />);
            // Call the function
            timer.handleStatusChange('started')
            expect(timer.state.count).toBe(0);

            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                expect(timer.state.countdownStatus).toBe('started');
                done();
            }, 1001);
        });
        it('should pause timer on paused status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />)
            timer.setState({count: 3})
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');
            setTimeout(() => {
                expect(timer.state.count).toBe(3);
                expect(timer.state.countdownStatus).toBe('paused');
                done()
            }, 1001);
        });
        it('should reset the count on stopped', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />)
            timer.setState({count: 3})
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');

            setTimeout(() => {
                expect(timer.state.countdownStatus).toBe('stopped');
                expect(timer.state.count).toBe(0);
                done()
            }, 1001);
        })
    });
});
