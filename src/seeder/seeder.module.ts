import { Module } from '@nestjs/common';
import { FilmsModule } from 'src/films/films.module';
import { PeopleModule } from 'src/people/people.module';
import { VehiclesModule } from 'src/vehicles/vehicles.module';
import { SeederService } from './seeder.service';

@Module({
  imports: [VehiclesModule, FilmsModule, PeopleModule],
  providers: [SeederService],
})
export class SeederModule {}
