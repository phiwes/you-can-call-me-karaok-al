import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Song} from './song.entity';

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    artistId: number;

    @Column({ length: 100 })
    artistFirstName: string;

    @Column({ length: 100 })
    artistLastName: string;

    @OneToMany(type => Song, song => song.artist)
    songs: Song[];
}
