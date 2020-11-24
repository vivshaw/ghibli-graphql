import { Field, ObjectType } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Vehicle {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar', { length: 500, nullable: false })
  name: string;

  @Field()
  @Column('text', { nullable: false })
  description: string;

  @Field()
  @Column('varchar', { length: 20, nullable: false })
  vehicle_class: string;

  @Field()
  @Column('int', { nullable: false })
  length: number;

  @Field(() => Person)
  @ManyToOne(() => Person, (person) => person.pilotOf)
  pilot: Person;

  @Field(() => Film)
  @ManyToOne(() => Film, (film) => film.vehicles)
  film: Film;
}
