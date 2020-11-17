import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesResolver } from './vehicles.resolver';

describe('VehiclesResolver', () => {
  let resolver: VehiclesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesResolver],
    }).compile();

    resolver = module.get<VehiclesResolver>(VehiclesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
