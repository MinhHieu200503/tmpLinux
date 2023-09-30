// const user = function (name, age) {
//     this.name = name;
//     this.age = age;
// };

// user.prototype.callname = function () {
//     console.log(this.name + ' ' + this.age);
// };
// user.prototype.addAge = function (age) {
//     this.age = age;
// };

// // const user3 = new user('NguyenAn', 29);
// const user3 = { name: 'NguyenAn', age: 29 };
// Object.setPrototypeOf(user3, );
// user3.callname();
// // user3.addAge(12);
// user3.callname();
// console.log(user3);
// // console.log(Object.getPrototypeOf(user).constructor);
function monster(weapon, action) {
    this.weapon = weapon;
    this.action = action;
}

monster.prototype.skill = (weapon, action) => {
    console.log(`use ${weapon} to ${action}`);
};

function Human(name, level) {
    this.name = name;
    this.level = level;
}

function SuperHero(name, level) {
    // console.log(this);
    Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Object.setPrototypeOf(SuperHero.prototype, monster.prototype);

// Set the `[[Prototype]]` of `SuperHero.prototype`
// to `Human.prototype`
// To set the prototypal inheritance chain

Human.prototype.speak = function () {
    return `${this.name} says hello.`;
};

SuperHero.prototype.fly = function () {
    return `${this.name} is flying.`;
};

const superMan = new SuperHero('Clark Kent', 1);

console.log(superMan.fly());
console.log(superMan.speak());
// superMan.skill('katana', 'stab');
console.log(superMan);
