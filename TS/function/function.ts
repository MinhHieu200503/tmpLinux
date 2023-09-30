type User = {
    name: string;
    age: number;
};

function createUser( User): User {
    let user: User;
    user = {
        ...User
    }
    return user;
}
const user = { name: 'Hieu', age: 20, say: 'hello' };
createUser(user);
export {};
