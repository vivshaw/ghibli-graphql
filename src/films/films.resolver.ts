import { Resolver, Query, Args } from '@nestjs/graphql';
import { FilmsService } from './films.service';

@Resolver('Film')
export class FilmsResolver {
  constructor(private filmsService: FilmsService) {}

  @Query()
  films() {
    return this.filmsService.all();
  }

  @Query()
  film(@Args('id') id: string) {
    return this.filmsService.find(id);
  }
}
