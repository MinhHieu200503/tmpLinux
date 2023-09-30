import * as ENUM from '../enums/enums';
type Person = {
    firstname: string;
    lastname: string;
    age?: number;
    fullname(): string;
};

type User = Person & {
    role: 'User' | 'Customer';
};

type Admin = Person & {
    role: 'Admin';
};

const user1: User = {
    firstname: 'Hieu',
    lastname: 'Lai',
    fullname() {
        return this.firstname + ' ' + this.lastname;
    },
    role: ENUM.ROLES.USER,
};
console.log(user1);
export {};
