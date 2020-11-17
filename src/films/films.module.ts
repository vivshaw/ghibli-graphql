import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsResolver } from './films.resolver';

@Module({
  providers: [FilmsService, FilmsResolver]
})
export class FilmsModule {}
