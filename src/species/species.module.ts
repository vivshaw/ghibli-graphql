import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { SpeciesResolver } from './species.resolver';
import { PeopleService } from 'src/people/people.service';
import { FilmsService } from 'src/films/films.service';

@Module({
  providers: [SpeciesService, SpeciesResolver, PeopleService, FilmsService],
})
export class SpeciesModule {}
