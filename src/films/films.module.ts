import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsResolver } from './films.resolver';
import { VehiclesService } from 'src/vehicles/vehicles.service';
import { PeopleService } from 'src/people/people.service';
import { LocationsService } from 'src/locations/locations.service';
import { SpeciesService } from 'src/species/species.service';
import { Film } from './film.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  providers: [
    FilmsService,
    FilmsResolver,
    VehiclesService,
    PeopleService,
    LocationsService,
    SpeciesService,
  ],
})
export class FilmsModule {}
