import { Resolver, Query, Args } from '@nestjs/graphql';
import { Film } from './film.model';
import { FilmsService } from './films.service';

@Resolver('Film')
export class FilmsResolver {
  constructor(private filmsService: FilmsService) {}

  @Query(() => [Film])
  films() {
    return this.filmsService.all();
  }

  @Query(() => Film)
  film(@Args('id') id: string) {
    return this.filmsService.find(id);
  }
}
