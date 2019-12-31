import {Entity, Column, PrimaryGeneratedColumn,  ManyToOne} from 'typeorm';
import {Artist} from './artist.entity';

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    songId: number;

    @Column({ length: 100 })
    songName: string;

    @Column({ length: 300 })
    songUrl: string;

    @ManyToOne(type => Artist, artist => artist.songs)
    artist: Artist;
}
