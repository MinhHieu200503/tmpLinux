function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = () => {
        return firstname + ' ' + lastname;
    };
    return this;
}

function Person2(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = () => {
        return firstname + ' ' + lastname;
    };
    return this;
}

const p1 = Person('Nguyen', 'An');
console.log(p1);
const p2 = Person2('Tran', 'Binh');
console.log(this);
console.log(p2);
console.log(p1);
