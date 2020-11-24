import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsResolver } from './locations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.model';

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationsService, LocationsResolver],
  exports: [LocationsService],
})
export class LocationsModule {}
