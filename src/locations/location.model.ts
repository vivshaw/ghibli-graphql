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

@ObjectType({
  description:
    'A location featured in a Studio Ghibli film. Among other places, this may include countries, buildings, forests, or bodies of water.',
})
@Entity()
export class Location {
  @Field({ description: 'UUID identifying the location' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'Name of the location' })
  @Column('varchar', { length: 500, nullable: false })
  name: string;

  @Field({ description: 'Climate of the location' })
  @Column('varchar', { length: 30, nullable: false })
  climate: string;

  @Field({ description: 'Terrain of the location' })
  @Column('varchar', { length: 30, nullable: false })
  terrain: string;

  @Field({ description: "Percentage of location's surface covered in water" })
  @Column('int', { nullable: false })
  surface_water: number;

  @Field(() => [Person], {
    nullable: false,
    description: 'Characters who live in or may be found in this location',
  })
  @ManyToMany(() => Person, (person) => person.locations)
  @JoinTable()
  residents: Person[];

  @Field(() => [Film], {
    nullable: false,
    description: 'Films in which this location appears',
  })
  @ManyToMany(() => Film, (film) => film.locations)
  films: Film[];
}
