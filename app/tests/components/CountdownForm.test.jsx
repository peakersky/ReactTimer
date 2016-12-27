var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
   it('should exist', ()=> {
       expect(CountdownForm).toExist();
   });
    it('should call onSetCountdown if valid seconds entered', () => {
       // using spy from the expect library. Spy is a property that will be passed on as arguments to functions.
        // Create the spy
        var spy = expect.createSpy();
        // create a DOM element, and render to the form.
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown = {spy}/>);
        // select the DOM element.
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        // take the value from the count down form.
        countdownForm.refs.seconds.value = '109';
        // simulate a submission of the form. the [0] finds the first node element that is the form.
        TestUtils.Simulate.submit($el.find('form')[0]);
        // expect that the onSetCountdown function is called with an integer 109
        expect(spy).toHaveBeenCalledWith(109);
    });
    it('should not call onSetCountdown if invalid seconds entered', () => {
        // using spy from the expect library. Spy is a property that will be passed on as arguments to functions.
        // Create the spy
        var spy = expect.createSpy();
        // create a DOM element, and render to the form.
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown = {spy}/>);
        // select the DOM element.
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        // take the value from the count down form.
        countdownForm.refs.seconds.value = 'aa';
        // simulate a submission of the form. the [0] finds the first node element that is the form.
        TestUtils.Simulate.submit($el.find('form')[0]);
        // expect that the onSetCountdown function is called with an integer 109
        expect(spy).toNotHaveBeenCalled();
    });
});