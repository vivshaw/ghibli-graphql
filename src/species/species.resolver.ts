import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import { Species } from './species.model';
import { SpeciesService } from './species.service';

@Resolver((of) => Species)
export class SpeciesResolver {
  constructor(private speciesService: SpeciesService) {}

  @Query(() => [Species], {
    description:
      'Get information about all species appearing in Studio Ghibli films.',
  })
  async allSpecies() {
    return this.speciesService.all();
  }

  @Query(() => Species, {
    description: 'Get information about a specific species by UUID',
  })
  async species(@Args('id') id: string) {
    return this.speciesService.find(id);
  }

  @ResolveField((returns) => [Film])
  async films(@Parent() species: Species) {
    return this.speciesService.loadFilmsForSpecies(species);
  }

  @ResolveField((returns) => [Person])
  async people(@Parent() species: Species) {
    return this.speciesService.loadMembersOfSpecies(species);
  }
}
