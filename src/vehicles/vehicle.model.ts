import { Field, ObjectType } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({
  description:
    'A vehicle, such as a car,s hip or plane, appearing in a Studio Ghibli film.',
})
@Entity()
export class Vehicle {
  @Field({ description: 'UUID identifying the vehicle' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'Name of the vehicle' })
  @Column('varchar', { length: 500, nullable: false })
  name: string;

  @Field({ description: 'A short description of the vehicle' })
  @Column('text', { nullable: false })
  description: string;

  @Field({ description: 'Class of the vehicle' })
  @Column('varchar', { length: 20, nullable: false })
  vehicle_class: string;

  @Field({ description: 'Length of the vehicle, in feet' })
  @Column('int', { nullable: false })
  length: number;

  @Field(() => Person, { description: 'Character who pilots this vehicle' })
  @ManyToOne(() => Person, (person) => person.pilotOf)
  pilot: Person;

  @Field(() => Film, { description: 'Films in which this vehicle appears' })
  @ManyToOne(() => Film, (film) => film.vehicles)
  film: Film;
}
