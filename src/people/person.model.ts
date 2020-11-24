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
  @Column('varchar', { length: 30, nullable: false })
  age: string;

  @Field()
  @Column('varchar', { length: 30, nullable: false })
  eye_color: string;

  @Field()
  @Column('varchar', { length: 30, nullable: false })
  hair_color: string;

  @Field(() => [Film], { nullable: false })
  @ManyToMany(() => Film, (film) => film.people)
  films: Film[];

  @Field(() => Species)
  @ManyToOne(() => Species, (species) => species.people)
  species: Species;

  @Field(() => [Location], { nullable: true })
  @ManyToMany(() => Location)
  locations: Location[];

  @Field(() => [Vehicle], { nullable: true })
  @OneToMany(() => Vehicle, (vehicle) => vehicle.pilot)
  pilotOf: Vehicle[];
}
