import { Resolver, Query, Args } from '@nestjs/graphql';
import { Species } from './species.model';
import { SpeciesService } from './species.service';

@Resolver('Species')
export class SpeciesResolver {
  constructor(private speciesService: SpeciesService) {}

  @Query(() => [Species])
  species() {
    return this.speciesService.all();
  }

  @Query(() => Species)
  specie(@Args('id') id: string) {
    return this.speciesService.find(id);
  }
}
