import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleResolver } from './people.resolver';
import { Person } from './person.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PeopleService, PeopleResolver],
  exports: [PeopleService],
})
export class PeopleModule {}
