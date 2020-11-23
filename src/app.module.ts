import { Module } from '@nestjs/common';
import { FilmsModule } from './films/films.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SpeciesModule } from './species/species.module';
import { LocationsModule } from './locations/locations.module';
import { PeopleModule } from './people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicles/vehicle.model';
import { Film } from './films/film.model';
import { Person } from './people/person.model';
import { Location } from './locations/location.model';
import { Species } from './species/species.model';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      introspection: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgressword',
      database: 'jiburi-nest',
      entities: [Film, Location, Person, Species, Vehicle],
      synchronize: false,
    }),
    FilmsModule,
    LocationsModule,
    PeopleModule,
    SpeciesModule,
    VehiclesModule,
  ],
})
export class AppModule {}
