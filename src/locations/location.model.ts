import { Field, ObjectType } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Location {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar', { length: 500, nullable: false })
  name: string;

  @Field()
  @Column('varchar', { length: 30, nullable: false })
  climate: string;

  @Field()
  @Column('varchar', { length: 30, nullable: false })
  terrain: string;

  @Field()
  @Column('int', { nullable: false })
  surface_water: number;

  @Field(() => [Person], { nullable: false })
  @ManyToMany(() => Person)
  @JoinTable()
  residents: Person[];

  @Field(() => [Film], { nullable: false })
  @ManyToMany(() => Film)
  films: Film[];
}
