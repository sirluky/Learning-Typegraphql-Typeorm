import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity, OneToMany, JoinColumn } from "typeorm";
// import { Location } from "./Location";
import { Field, ObjectType } from "type-graphql";


@ObjectType()
@Entity()
export class Bus extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id?: number;

    // @OneToMany(type => Location, loc => loc.bus)
    // location!: Location[]

    @Field()
    @Column('varchar', { length: 50, nullable: true })
    label?: string;

    @Field()
    @Column('varchar', { length: 50, nullable: false })
    name?: string;
}