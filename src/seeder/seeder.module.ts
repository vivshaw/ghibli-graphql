import { Module } from '@nestjs/common';
import { FilmsModule } from 'src/films/films.module';
import { VehiclesModule } from 'src/vehicles/vehicles.module';
import { SeederService } from './seeder.service';

@Module({
  imports: [VehiclesModule, FilmsModule],
  providers: [SeederService],
})
export class SeederModule {}
