import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {singer} from "./singer";


@Entity("user" ,{schema:"public" } )
@Index("user_user_name_uindex",["user_name",],{unique:true})
export class user {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"user_name"
        })
    user_name:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"user_email"
        })
    user_email:string | null;
        

   
    @OneToOne(()=>singer, (singer: singer)=>singer.singer)
    singer:singer | null;

}
