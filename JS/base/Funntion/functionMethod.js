'use strict';
const car = {
    name: 'car',
    start() {
        console.log('Start the ' + this.name);
    },
    speedUp() {
        console.log('Speed up the ' + this.name);
    },
    stop() {
        console.log('Stop the ' + this.name);
    },
};

const person = {
    name: 'Nguyen A',
};

car.call(person);
