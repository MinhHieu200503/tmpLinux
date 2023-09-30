import { DataSource } from 'typeorm';
import { Client } from './entity/entity';
const main = async () => {
    try {
        await new DataSource({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'hieulai',
            password: '123',
            database: 'db_Linux',
            entities: [Client],
            synchronize: true,
        });
        console.log('Connect postgresql successfully');
    } catch (error) {
        console.log(error);
        throw new Error('Unable to connect postgresql');
    }
};
main();
