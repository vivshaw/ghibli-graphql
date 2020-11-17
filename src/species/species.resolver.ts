import { Resolver, Query, Args } from '@nestjs/graphql';
import { SpeciesService } from './species.service';

@Resolver('Species')
export class SpeciesResolver {
  constructor(private speciesService: SpeciesService) {}

  @Query()
  species() {
    return this.speciesService.getSpecies();
  }

  @Query()
  specie(@Args('id') id: String) {
    return this.speciesService.getSpecieById(id);
  }
}
