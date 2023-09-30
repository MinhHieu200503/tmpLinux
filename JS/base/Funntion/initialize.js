function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say('asd'); // 'Hi'
