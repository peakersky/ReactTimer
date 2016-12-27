// Third party libraries.
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });
    describe('render', () => {
       it ('should render the pause button when started', () => {
           // render element to the DOM.
           var controls = TestUtils.renderIntoDocument(<Contorls countdownStatus="started"/>);
           // assert the output that is rendered to the screen.
           var $el = $(ReactDOM.findDOMNode(controls));
           // search for a button whose text is 'Pause'
           // Create a variable that represents the pauseButton and check if it exists.
           var $pauseButton = $el.find('button:contains(Pause)') //find the button with the text value 'Pause'.
           expect($pauseButton.length).toBe(1); // the .length in the jQuery returns the number of elements it found in the DOM.
       });
       it ('should render the start button when paused', () => {
           var controls = TestUtils.renderIntoDocument(<Contorls countdownStatus="paused"/>);
           var $el = $(ReactDOM.findDOMNode(controls));
           var $startButton = $el.find('button:contains(Start)');
           expect($startButton.length).toBe(1);
       });
    });
});

