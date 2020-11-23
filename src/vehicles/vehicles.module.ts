import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesResolver } from './vehicles.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.model';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  providers: [VehiclesService, VehiclesResolver],
})
export class VehiclesModule {}
