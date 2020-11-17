import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from 'src/films/films.service';
import { PeopleService } from 'src/people/people.service';
import { VehiclesResolver } from './vehicles.resolver';
import { VehiclesService } from './vehicles.service';

describe('VehiclesResolver', () => {
  let resolver: VehiclesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehiclesResolver,
        VehiclesService,
        PeopleService,
        FilmsService,
      ],
    }).compile();

    resolver = module.get<VehiclesResolver>(VehiclesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
