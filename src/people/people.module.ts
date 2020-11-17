import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleResolver } from './people.resolver';
import { FilmsService } from 'src/films/films.service';
import { SpeciesService } from 'src/species/species.service';

@Module({
  providers: [PeopleService, PeopleResolver, FilmsService, SpeciesService],
})
export class PeopleModule {}
