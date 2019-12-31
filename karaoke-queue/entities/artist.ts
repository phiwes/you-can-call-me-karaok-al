import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {song} from "./song";


@Entity("artist" ,{schema:"public" } )
@Index("artist_artist_id_uindex",["artist_id",],{unique:true})
export class artist {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"artist_id"
        })
    artist_id:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"artist_first_name"
        })
    artist_first_name:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"artist_last_name"
        })
    artist_last_name:string | null;
        

   
    @OneToMany(()=>song, (song: song)=>song.songArtist)
    songs:song[];
    
}
