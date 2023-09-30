function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            let a = false;
            if (a) {
                resolve({
                    userId: userId,
                    username: 'john',
                });
            } else {
                // throw new Error('can not get user');
                reject('fail to get user');
            }
        }, 1000);
    });
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}

async function sevice() {
    try {
        let user = await getUser(101);
        console.log(user);
        let service = await getServices(user);
        console.log(service);
        let cost = await getServiceCost(service);
        console.log(cost);
    } catch (error) {
        console.log('error: ' + error);
    }
}

sevice();
