let success = false;
function getUser() {
    return new Promise((resolve, reject) => {
        if (success)
            return resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
            ]);
        else {
            return reject('fail to get User');
        }
    });
}

function findUser(users) {
    let user = users.find((users) => users.username === 'john');
    return user;
}

let promise = getUser()
    .then((onFulFilled) => {
        let result = findUser(onFulFilled);
        console.log(result);
        return 'hello';
    })
    .then(
        (onFulFilled) => {
            console.log(onFulFilled);
        },
        (onRejected) => {
            console.log(onRejected);
            return 'catch';
        }
    )
    .catch((error) => {
        console.log('catch error');
    });
