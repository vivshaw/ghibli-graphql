import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from 'src/films/films.service';
import { SpeciesService } from 'src/species/species.service';
import { PeopleResolver } from './people.resolver';
import { PeopleService } from './people.service';

describe('PeopleResolver', () => {
  let resolver: PeopleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleResolver, PeopleService, FilmsService, SpeciesService],
    }).compile();

    resolver = module.get<PeopleResolver>(PeopleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
