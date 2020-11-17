import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { FilmsService } from 'src/films/films.service';
import { SpeciesService } from 'src/species/species.service';
import { PeopleService } from './people.service';
import { PersonModel } from './person.model';

@Resolver('Person')
export class PeopleResolver {
  constructor(
    private peopleService: PeopleService,
    private filmsService: FilmsService,
    private speciesService: SpeciesService,
  ) {}

  @Query()
  people() {
    return this.peopleService.getPeople();
  }

  @Query()
  person(@Args('id') id: String) {
    return this.peopleService.getPersonById(id);
  }

  @ResolveField()
  films(@Parent() person: PersonModel) {
    return this.filmsService.getFilmsByPerson(person);
  }

  @ResolveField()
  species(@Parent() person: PersonModel) {
    return this.speciesService.getSpecieByPerson(person);
  }
}
