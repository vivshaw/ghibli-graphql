import { Module } from '@nestjs/common';
import { FilmsModule } from 'src/films/films.module';
import { LocationsModule } from 'src/locations/locations.module';
import { PeopleModule } from 'src/people/people.module';
import { SpeciesModule } from 'src/species/species.module';
import { VehiclesModule } from 'src/vehicles/vehicles.module';
import { SeederService } from './seeder.service';

@Module({
  imports: [
    VehiclesModule,
    FilmsModule,
    PeopleModule,
    SpeciesModule,
    LocationsModule,
  ],
  providers: [SeederService],
})
export class SeederModule {}
