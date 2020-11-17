import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesResolver } from './vehicles.resolver';
import { PeopleService } from 'src/people/people.service';
import { FilmsService } from 'src/films/films.service';

@Module({
  providers: [VehiclesService, VehiclesResolver, PeopleService, FilmsService]
})
export class VehiclesModule {}
