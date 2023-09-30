let person = {
    name: 'Hieu',
    action: function () {
        console.log(`${this.name} sing`);
    },
};

let p2 = {
    name: 'HieuLai',
};

// let name = 'HieuLai';
console.log(this);
let p1 = person.action.bind(p2);
p1();
