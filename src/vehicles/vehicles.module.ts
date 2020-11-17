import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesResolver } from './vehicles.resolver';

@Module({
  providers: [VehiclesService, VehiclesResolver]
})
export class VehiclesModule {}
