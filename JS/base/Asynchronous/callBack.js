//synchronous
// function getUsers() {
//     return [
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: ['jane@test.com', 'hello'] },
//     ];
// }

// asynchronous
// function getUsers(callback) {
//     let users = [];

//     // delay 1 second (1000ms)
//     setTimeout(() => {
//         users = [
//             { username: 'john', email: 'john@test.com' },
//             { username: 'jane', email: 'jane@test.com' },
//         ];
//     }, 1000);

//     return users;
// }

// function findUser(username) {
//     const users = getUsers();
//     const user = users.find((user) => user.email[1] === username);
//     return user;
// }

// console.log(findUser('john'));

// function getUser(callback) {
//     setTimeout(() => {
//         callback([
//             { username: 'john', email: 'john@test.com' },
//             { username: 'jane', email: 'jane@test.com' },
//         ]);
//     }, 0);
// }

// function findUser(username, callback) {
//     getUser((a) => {
//         const user = a.find((user) => user.username === username);
//         callback(user);
//     });
// }

// findUser('john', console.log);
