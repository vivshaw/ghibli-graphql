import { Test, TestingModule } from '@nestjs/testing';
import { LocationsResolver } from './locations.resolver';

describe('LocationsResolver', () => {
  let resolver: LocationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationsResolver],
    }).compile();

    resolver = module.get<LocationsResolver>(LocationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
