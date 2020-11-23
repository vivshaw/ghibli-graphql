import { Resolver, Query, Args } from '@nestjs/graphql';
import { PeopleService } from './people.service';

@Resolver('Person')
export class PeopleResolver {
  constructor(private peopleService: PeopleService) {}

  @Query()
  people() {
    return this.peopleService.all();
  }

  @Query()
  person(@Args('id') id: string) {
    return this.peopleService.find(id);
  }
}
