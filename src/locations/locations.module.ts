import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsResolver } from './locations.resolver';
import { FilmsService } from 'src/films/films.service';
import { PeopleService } from 'src/people/people.service';
import { Location } from 'graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationsService, LocationsResolver, FilmsService, PeopleService],
})
export class LocationsModule {}
