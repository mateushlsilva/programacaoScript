import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"teams"})
export class Teams {
    // define a chave primária como auto incremento
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    // @OneToMany(() => Group, (group) => group.committee)
    // group: Group[];

    // @OneToMany(() => Call, (call) => call.committee)
    // call: Call[];

    // @ManyToOne(() => Call, (call) => call.committee, {eager:true})
    // committee: Committee;

}

