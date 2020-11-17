import { Test, TestingModule } from '@nestjs/testing';
import { LocationsService } from 'src/locations/locations.service';
import { PeopleService } from 'src/people/people.service';
import { SpeciesService } from 'src/species/species.service';
import { VehiclesService } from 'src/vehicles/vehicles.service';
import { FilmsResolver } from './films.resolver';
import { FilmsService } from './films.service';

describe('FilmsResolver', () => {
  let resolver: FilmsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmsResolver,
        FilmsService,
        LocationsService,
        PeopleService,
        SpeciesService,
        VehiclesService,
      ],
    }).compile();

    resolver = module.get<FilmsResolver>(FilmsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
