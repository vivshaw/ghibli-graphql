import { Module, OnModuleDestroy } from '@nestjs/common';
import { FilmsModule } from './films/films.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SpeciesModule } from './species/species.module';
import { LocationsModule } from './locations/locations.module';
import { PeopleModule } from './people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederModule } from './seeder/seeder.module';
import { GuardModule } from './guards/guard.module';
import depthLimit from 'graphql-depth-limit';
import MaxComplexityPlugin from './plugins/MaxComplexityPlugin';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import Redis from './util/Redis';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cacheControl: {
        defaultMaxAge: 86400,
      },
      cache: Redis,
      context: ({ req, res }) => ({ req, res }),
      introspection: true,
      path: '/',
      playground: true,
      plugins: [responseCachePlugin()],
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
    GuardModule,
  ],
  providers: [MaxComplexityPlugin],
})
export class AppModule implements OnModuleDestroy {
  onModuleDestroy() {
    Redis.close();
  }
}
