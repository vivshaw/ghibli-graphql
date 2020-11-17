import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsResolver } from './locations.resolver';

@Module({
  providers: [LocationsService, LocationsResolver],
})
export class LocationsModule {}
