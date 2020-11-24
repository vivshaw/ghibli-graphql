import { Field, ObjectType } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Species {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar', { length: 500, nullable: false })
  name: string;

  @Field()
  @Column('text', { nullable: false })
  classification: string;

  @Field()
  @Column('varchar', { length: 60, nullable: false })
  eye_colors: string;

  @Field()
  @Column('varchar', { length: 60, nullable: false })
  hair_colors: string;

  @Field(() => [Film], { nullable: false })
  @ManyToMany(() => Film, (film) => film.species)
  films: Film[];

  @Field(() => [Person], { nullable: false })
  @OneToMany(() => Person, (person) => person.species)
  people: Person[];
}
