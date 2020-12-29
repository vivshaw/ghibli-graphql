import { Field, ObjectType } from '@nestjs/graphql';
import { Location } from 'src/locations/location.model';
import { Film } from 'src/films/film.model';
import { Species } from 'src/species/species.model';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Vehicle } from 'src/vehicles/vehicle.model';

@ObjectType({
  description:
    'A character appearing in a Studio Ghibli film. Includes both human and non-human characters.',
})
@Entity()
export class Person {
  @Field({ description: 'UUID identifying the character' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: "The character's name" })
  @Column('varchar', { length: 500, nullable: false })
  name: string;

  @Field({
    description: "The character's gender, if any",
  })
  @Column('text', { nullable: false })
  gender: string;

  @Field({ description: "The character's age, if known" })
  @Column('varchar', { length: 30, nullable: false })
  age: string;

  @Field({ description: "The character's eye color" })
  @Column('varchar', { length: 30, nullable: false })
  eye_color: string;

  @Field({ description: "The character's hair color, if any" })
  @Column('varchar', { length: 30, nullable: false })
  hair_color: string;

  @Field(() => [Film], {
    nullable: false,
    description: 'Films in which this character appears',
  })
  @ManyToMany(() => Film, (film) => film.people)
  films: Film[];

  @Field(() => Species, {
    description: 'Species to which this character belongs',
  })
  @ManyToOne(() => Species, (species) => species.people)
  species: Species;

  @Field(() => [Location], {
    nullable: true,
    description: 'Locations in which this character may be found',
  })
  @ManyToMany(() => Location, (location) => location.residents)
  locations: Location[];

  @Field(() => [Vehicle], {
    nullable: true,
    description: 'Vehicles which this character pilots, if any',
  })
  @OneToMany(() => Vehicle, (vehicle) => vehicle.pilot)
  pilotOf: Vehicle[];
}
