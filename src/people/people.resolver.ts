import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Species } from 'src/species/species.model';
import { PeopleService } from './people.service';
import { Person } from './person.model';

@Resolver((of) => Person)
export class PeopleResolver {
  constructor(private peopleService: PeopleService) {}

  @Query(() => [Person])
  async people() {
    return this.peopleService.all();
  }

  @Query(() => Person)
  async person(@Args('id') id: string) {
    return this.peopleService.find(id);
  }

  @ResolveField((returns) => [Film])
  async films(@Parent() person: Person) {
    return this.peopleService.loadFilmsForPerson(person);
  }

  @ResolveField((returns) => Species)
  async species(@Parent() person: Person) {
    return this.peopleService.loadSpeciesForPerson(person);
  }

  @ResolveField((returns) => Species)
  async locations(@Parent() person: Person) {
    return this.peopleService.loadLocationsForPerson(person);
  }

  @ResolveField((returns) => Species)
  async pilotOf(@Parent() person: Person) {
    return this.peopleService.loadVehiclesForPeople(person);
  }
}
