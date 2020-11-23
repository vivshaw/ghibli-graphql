import { Resolver, Query, Args } from '@nestjs/graphql';
import { SpeciesService } from './species.service';

@Resolver('Species')
export class SpeciesResolver {
  constructor(private speciesService: SpeciesService) {}

  @Query()
  species() {
    return this.speciesService.all();
  }

  @Query()
  specie(@Args('id') id: string) {
    return this.speciesService.find(id);
  }
}
