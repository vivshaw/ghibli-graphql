import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SpeciesModule } from './species/species.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    FilmsModule,
    VehiclesModule,
    SpeciesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
