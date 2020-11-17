import { Test, TestingModule } from '@nestjs/testing';
import { FilmsResolver } from './films.resolver';
import { FilmsService } from './films.service';

describe('FilmsResolver', () => {
  let resolver: FilmsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsResolver, FilmsService],
    }).compile();

    resolver = module.get<FilmsResolver>(FilmsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
