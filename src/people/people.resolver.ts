import { Resolver, Query, Args } from '@nestjs/graphql';
import { PeopleService } from './people.service';
import { Person } from './person.model';

@Resolver('Person')
export class PeopleResolver {
  constructor(private peopleService: PeopleService) {}

  @Query(() => [Person])
  people() {
    return this.peopleService.all();
  }

  @Query(() => Person)
  person(@Args('id') id: string) {
    return this.peopleService.find(id);
  }
}
