import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Matches } from "./Matches";


@Entity({name:"teams"})
export class Teams {
    // define a chave primária como auto incremento
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;


    @OneToMany(() => Matches, (matches) => matches.idhost)
    matches: Matches[];

    @OneToMany(() => Matches, (matches) => matches.idvisitor)
    matches1: Matches[];

}