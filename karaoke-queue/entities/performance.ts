import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("performance" ,{schema:"public" } )
@Index("performance_performance_id_uindex",["performance_id",],{unique:true})
export class performance {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"performance_id"
        })
    performance_id:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"performance_name"
        })
    performance_name:string | null;
        

    @Column("date",{ 
        nullable:false,
        name:"performance_date"
        })
    performance_date:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"performance_location"
        })
    performance_location:string | null;
        
}
