import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Singer {
    @PrimaryGeneratedColumn()
    singerId: number;

    @Column({ length: 100 })
    singerName: string;

}
