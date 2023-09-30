import * as ENUM from '../enums/enums';

interface User extends Person {
    role?: 'User';
}

interface Person {
    firstname: string;
    lastname: string;
    age: number;
    fullname(name: string, age: number): string;
    getAge(): number;
}

interface Admin extends Person {
    role: 'Admin';
}

interface Admin {
    token: string;
}

const admin1: Admin = {
    firstname: 'Hieu',
    lastname: 'Lai',
    age: 21,
    fullname() {
        return this.firstname + ' ' + this.lastname;
    },
    getAge() {
        return this.age;
    },
    role: 'Admin',
    token: '123asd',
};

const user1: User = {
    firstname: 'Hieu',
    lastname: 'Lai',
    age: 21,
    fullname() {
        return this.firstname + ' ' + this.lastname;
    },
    getAge() {
        return this.age;
    },
    role: 'User',
};

console.log(user1);
export {};
