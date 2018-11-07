// @flow

exports.askQuestion = (cmd) => (question) => new Promise(resolve => cmd.question(question, resolve));
