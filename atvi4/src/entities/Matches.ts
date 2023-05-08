import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Teams } from "./Teams";


@Entity({name:"matches"})
export class Matches {
    // define a chave primária como auto incremento
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: 'date' })
    date: Date;

    @ManyToOne(() => Teams, (teams) => teams.matches)
    @JoinColumn({ name: 'idhost' })
    idhost: Teams;

    @ManyToOne(() => Teams, (teams) => teams.matches1)
    @JoinColumn({ name: 'idvisitor' })
    idvisitor: Teams;

}