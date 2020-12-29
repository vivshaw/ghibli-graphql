import { Field, ObjectType } from '@nestjs/graphql';
import { Location } from 'src/locations/location.model';
import { Person } from 'src/people/person.model';
import { Species } from 'src/species/species.model';
import { Vehicle } from 'src/vehicles/vehicle.model';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType({ description: 'A Studio Ghibli film' })
@Entity()
export class Film {
  @Field({ description: 'UUID identifying the film' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'Title of the film' })
  @Column('varchar', { length: 500, nullable: false })
  title: string;

  @Field({ description: 'A short description of the film' })
  @Column('text', { nullable: false })
  description: string;

  @Field({ description: 'Director of the film' })
  @Column('varchar', { length: 60, nullable: false })
  director: string;

  @Field({ description: 'Producer of the film' })
  @Column('varchar', { length: 60, nullable: false })
  producer: string;

  @Field({ description: 'Release year of the film' })
  @Column('int', { nullable: false })
  release_date: number;

  @Field({ description: 'Rotten Tomatoes score for the film' })
  @Column('int', { nullable: false })
  rt_score: number;

  @Field(() => [Location], {
    nullable: false,
    description: 'Locations depicted in the film',
  })
  @ManyToMany(() => Location, (location) => location.films)
  @JoinTable()
  locations: Location[];

  @Field(() => [Person], {
    nullable: false,
    description: 'Characters appearing in this film',
  })
  @ManyToMany(() => Person, (person) => person.films)
  @JoinTable()
  people: Person[];

  @Field(() => [Species], {
    nullable: false,
    description: 'Species appearing in this film',
  })
  @ManyToMany(() => Species, (species) => species.films)
  @JoinTable()
  species: Species[];

  @Field(() => [Vehicle], {
    nullable: true,
    description: 'Vehicles appearing in this film',
  })
  @OneToMany(() => Vehicle, (vehicle) => vehicle.film)
  vehicles: Vehicle[];
}
