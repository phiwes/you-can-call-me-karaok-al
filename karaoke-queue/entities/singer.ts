import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {user} from "./user";


@Entity("singer" ,{schema:"public" } )
@Index("singer_singer_id_uindex",["singer",],{unique:true})
export class singer {

   
    @OneToOne(()=>user, (user: user)=>user.singer,{ primary:true, nullable:false, })
    @JoinColumn({ name:'singer_id'})
    singer:user | null;


    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"singer_name"
        })
    singer_name:string;
        
}
