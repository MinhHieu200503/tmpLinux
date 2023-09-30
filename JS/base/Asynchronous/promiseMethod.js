const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('resolve promise');
        resolve(10);
    }, 1000);
});

const p2 = new Promise((rev, rej) => {
    setTimeout(() => {
        console.log('promise rejected');
        rev(20);
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});

// Promise.race([p1, p2]).then((ful, rej) => {
//     if (ful) {
//         console.log('result : fulfilled');
//     } else {
//         console.log('result : rejected');
//     }
// });

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.log('error'));

// Promise.allSettled([p1, p2, p3]).then((resolve) => {
//     console.log(resolve);
// });
