import {
    Entity,
    BaseEntity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
@Entity('client')
export class Client extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column({
        unique: true,
    })
    email: string;

    @Column({
        unique: true,
        length: 10,
    })
    card_number: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}
