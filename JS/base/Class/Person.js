class Person {
    constructor(name, age) {
        (this.name = name), (this.age = age);
        this.info = () => {
            return this.name + ' ' + this.age;
        };
    }
}

let p1 = new Person('Hieu', 20);

console.log(p1);
console.log(p1.info());
