import { Module } from '@nestjs/common';
import { VehiclesModule } from 'src/vehicles/vehicles.module';
import { SeederService } from './seeder.service';

@Module({
  imports: [VehiclesModule],
  providers: [SeederService],
})
export class SeederModule {}
