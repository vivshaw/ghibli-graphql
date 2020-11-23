import { Field, ObjectType } from '@nestjs/graphql';
import { Location } from 'graphql';
import { Film } from 'src/films/film.model';
import { Species } from 'src/species/species.model';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Person {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar', { length: 500, nullable: false })
  name: string;

  @Field()
  @Column('text', { nullable: false })
  gender: string;

  @Field()
  @Column('number', { nullable: false })
  age: number;

  @Field()
  @Column('varchar', { length: 30, nullable: false })
  eye_color: string;

  @Field()
  @Column('varchar', { length: 30, nullable: false })
  hair_color: string;

  @Field(() => [Film], { nullable: false })
  @ManyToMany(() => Film, (film) => film.people)
  films: Film[];

  @Field()
  @ManyToOne(() => Species, (species) => species.people)
  species: Species;

  @Field(() => [Location], { nullable: false })
  @ManyToMany(() => Location)
  locations: Location[];
}
