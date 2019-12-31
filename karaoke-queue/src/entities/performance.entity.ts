import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Performance {
    @PrimaryGeneratedColumn()
    performanceId: number;

    @Column()
    performanceDate: Date;

    @Column({ length: 100 })
    performanceLocation: string;

    @Column({ length: 100 })
    performanceName: string;
}
