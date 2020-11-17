import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from 'src/films/films.service';
import { PeopleService } from 'src/people/people.service';
import { SpeciesResolver } from './species.resolver';
import { SpeciesService } from './species.service';

describe('SpeciesResolver', () => {
  let resolver: SpeciesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpeciesResolver, SpeciesService, FilmsService, PeopleService],
    }).compile();

    resolver = module.get<SpeciesResolver>(SpeciesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
