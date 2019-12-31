import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {artist} from "./artist";


@Entity("song" ,{schema:"public" } )
@Index("song_song_id_uindex",["song_id",],{unique:true})
@Index("song_song_url_uindex",["song_url",],{unique:true})
export class song {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"song_id"
        })
    song_id:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"song_name"
        })
    song_name:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"song_url"
        })
    song_url:string | null;
        

   
    @ManyToOne(()=>artist, (artist: artist)=>artist.songs,{  })
    @JoinColumn({ name:'song_artist_id'})
    songArtist:artist | null;

}
