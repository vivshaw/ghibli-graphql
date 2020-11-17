import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { SpeciesResolver } from './species.resolver';

@Module({
  providers: [SpeciesService, SpeciesResolver],
})
export class SpeciesModule {}
