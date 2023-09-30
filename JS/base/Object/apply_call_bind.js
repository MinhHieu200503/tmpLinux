let dog = {
    name: 'alax',
    sound: 'gau gau',
};

let cat = {
    name: 'jack',
    sound: 'cat cat',
};

let action = (favor, food, method) => {
    console.log(
        `${method}:==>>>${this.name} have sound ${this.sound} and favor is ${favor} and ${food}`
    );
};

//bind() => assign function to new function and call later
let action1 = action.bind(cat, 'soccer', 'fizz', 'call');
action1();
//apply
action.apply(dog, ['run', 'chicken', 'apply']);
//call
action.call(dog, 'run', 'chicken', 'call');
