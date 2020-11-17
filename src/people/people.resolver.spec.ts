import { Test, TestingModule } from '@nestjs/testing';
import { PeopleResolver } from './people.resolver';
import { PeopleService } from './people.service';

describe('PeopleResolver', () => {
  let resolver: PeopleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleResolver, PeopleService],
    }).compile();

    resolver = module.get<PeopleResolver>(PeopleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
