const user: { username: 'Hieu' | 'Lai' } = {
    username: 'Hieu',
};

let name1 = 'Lai' as const;
user.username = name1;
export {};
