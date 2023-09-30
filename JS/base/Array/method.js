const ob1 = {
    name: 'Phuong',
    favors: ['apple', 'banana', 'lemon', 'coconut'],
};
const ob2 = {
    name: 'Hoang',
    favors: ['apple', 'jerry', 'lemon', 'coconut'],
};
const ob3 = {
    name: 'Thinh',
    favors: ['apple', 'lemon'],
};

const arr = [ob1, ob2, ob3];

// const filler = arr.filter((element) => {
//     return element.name === 'Thinh';
// });

// const filler = arr.filter((element) => {
//     element.favors == ['apple', 'lemon'];
// });

// let tmpArr = ['apple', 'lemon'];

// const filler = arr.filter((element) => {
//     return element.favors.every((favor, index) => {
//         return favor === tmpArr[index];
//     });
// });

let reduce = arr.reduce((accumulate, current) => {
    return { ...accumulate, [current.favors]: current };
}, {});

console.log(reduce);

console.log(Object.values(reduce));

let arrFavors = Object.values(reduce).reduce((acc, cur) => {
    return [...acc, cur.favors];
}, []);

console.log(arrFavors);
