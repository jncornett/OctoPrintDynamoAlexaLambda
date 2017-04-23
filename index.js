'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Space Facts';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetPrintProgress');
    },
    'GetPrintProgressIntent': function() {
        this.emit('GetPrintProgress');
    },
    'GetPrintStateIntent': function() {
        this.emit('GetPrintState');
    },
    'GetPrintProgress': function() {
        this.emit(':tell', 'I don\'t know');
    },
    'GetPrintState': function() {
        this.emit(':tell', 'I don\'t know');
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me the print progress, or, you can say tell me the print state... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};