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

@ObjectType({ description: 'A species appearing in a Studio Ghibli film.' })
@Entity()
export class Species {
  @Field({ description: 'UUID identifying the species' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'Name of the species' })
  @Column('varchar', { length: 500, nullable: false })
  name: string;

  @Field({ description: 'Classification of the species' })
  @Column('text', { nullable: false })
  classification: string;

  @Field({ description: 'Eye colors of the species' })
  @Column('varchar', { length: 60, nullable: false })
  eye_colors: string;

  @Field({ description: 'Hair colors of the species' })
  @Column('varchar', { length: 60, nullable: false })
  hair_colors: string;

  @Field(() => [Film], {
    nullable: false,
    description: 'Films in which this species is found.',
  })
  @ManyToMany(() => Film, (film) => film.species)
  films: Film[];

  @Field(() => [Person], {
    nullable: false,
    description: 'Characters belonging to this species',
  })
  @OneToMany(() => Person, (person) => person.species)
  people: Person[];
}
