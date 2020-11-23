import { Field, ObjectType } from '@nestjs/graphql';
import { Location } from 'src/locations/location.model';
import { Person } from 'src/people/person.model';
import { Species } from 'src/species/species.model';
import { Vehicle } from 'src/vehicles/vehicle.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Film {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar', { length: 500, nullable: false })
  title: string;

  @Field()
  @Column('text', { nullable: false })
  description: string;

  @Field()
  @Column('varchar', { length: 60, nullable: false })
  director: string;

  @Field()
  @Column('varchar', { length: 60, nullable: false })
  producer: string;

  @Field()
  @Column('number', { nullable: false })
  release_date: number;

  @Field()
  @Column('number', { nullable: false })
  rt_score: number;

  @Field(() => [Vehicle], { nullable: false })
  @OneToMany(() => Vehicle, (vehicle) => vehicle.film)
  vehicles: Vehicle[];

  @Field(() => [Person], { nullable: false })
  @ManyToMany(() => Person, (person) => person.films)
  @JoinColumn()
  people: Person[];

  @Field(() => [Species], { nullable: false })
  @ManyToMany(() => Species, (species) => species.people)
  @JoinColumn()
  species: Species[];

  @Field(() => [Location], { nullable: false })
  @ManyToMany(() => Location, (location) => location.films)
  @JoinColumn()
  location: Location[];
}
