import { Module } from '@nestjs/common';
import { FilmsModule } from './films/films.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SpeciesModule } from './species/species.module';
import { LocationsModule } from './locations/locations.module';
import { PeopleModule } from './people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederModule } from './seeder/seeder.module';
import * as depthLimit from 'graphql-depth-limit';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      path: '/',
      playground: true,
      sortSchema: true,
      validationRules: [depthLimit(7)],
    }),
    TypeOrmModule.forRoot(),
    FilmsModule,
    LocationsModule,
    PeopleModule,
    SpeciesModule,
    VehiclesModule,
    SeederModule,
  ],
})
export class AppModule {}
