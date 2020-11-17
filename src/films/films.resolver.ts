import { Resolver, Query, Args } from '@nestjs/graphql';
import { FilmsService } from './films.service';

@Resolver('Film')
export class FilmsResolver {
  constructor(private filmsService: FilmsService) {}

  @Query()
  films() {
    return this.filmsService.getFilms();
  }

  @Query()
  film(@Args('id') id: String) {
    return this.filmsService.getFilmById(id);
  }
}
