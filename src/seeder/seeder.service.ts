import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/vehicles/vehicle.model';
import { VehiclesService } from 'src/vehicles/vehicles.service';
import { VEHICLES } from './data/vehicles.json';
import { FILMS } from './data/films.json';
import { Film } from 'src/films/film.model';
import { FilmsService } from 'src/films/films.service';

@Injectable()
export class SeederService {
  constructor(
    private readonly vehiclesService: VehiclesService,
    private readonly filmsService: FilmsService,
  ) {}

  private async seedFilms() {
    for (const {
      id,
      title,
      description,
      director,
      producer,
      release_date,
      rt_score,
      vehicles,
    } of FILMS) {
      const seedFilm = new Film();

      seedFilm.id = id;
      seedFilm.title = title;
      seedFilm.description = description;
      seedFilm.director = director;
      seedFilm.producer = producer;
      seedFilm.release_date = release_date;
      seedFilm.rt_score = rt_score;

      await this.filmsService.save(seedFilm);
    }
  }

  private async seedVehicles() {
    for (const {
      id,
      name,
      description,
      vehicle_class,
      length,
      film,
    } of VEHICLES) {
      const seedVehicle = new Vehicle();

      seedVehicle.id = id;
      seedVehicle.name = name;
      seedVehicle.description = description;
      seedVehicle.vehicle_class = vehicle_class;
      seedVehicle.length = length;
      seedVehicle.film = await this.filmsService.find(film);

      await this.vehiclesService.save(seedVehicle);
    }
  }

  async seed() {
    console.log('Beginning seed.');
    console.log('Seeding films...');
    await this.seedFilms();
    console.log('Seeding vehicles...');
    await this.seedVehicles();
    console.log('Done seeding!');
  }
}
