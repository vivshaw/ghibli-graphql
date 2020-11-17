import { Resolver, Query, Args } from '@nestjs/graphql';
import { PeopleService } from './people.service';

@Resolver('Person')
export class PeopleResolver {
  constructor(private peopleService: PeopleService) {}

  @Query()
  people() {
    return this.peopleService.getPeople();
  }

  @Query()
  person(@Args('id') id: String) {
    return this.peopleService.getPersonById(id);
  }
}
