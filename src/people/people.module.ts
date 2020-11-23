import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleResolver } from './people.resolver';
import { FilmsService } from 'src/films/films.service';
import { SpeciesService } from 'src/species/species.service';
import { Person } from './person.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PeopleService, PeopleResolver, FilmsService, SpeciesService],
})
export class PeopleModule {}
