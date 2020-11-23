import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { SpeciesResolver } from './species.resolver';
import { PeopleService } from 'src/people/people.service';
import { FilmsService } from 'src/films/films.service';
import { Species } from './species.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Species])],
  providers: [SpeciesService, SpeciesResolver, PeopleService, FilmsService],
})
export class SpeciesModule {}
