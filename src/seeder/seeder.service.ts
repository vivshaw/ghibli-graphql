import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/vehicles/vehicle.model';
import { VehiclesService } from 'src/vehicles/vehicles.service';
import { VEHICLES } from './data/vehicles.json';
import { FILMS } from './data/films.json';
import { PEOPLE } from './data/people.json';
import { Film } from 'src/films/film.model';
import { FilmsService } from 'src/films/films.service';
import { Person } from 'src/people/person.model';
import { PeopleService } from 'src/people/people.service';
import { SPECIES } from './data/species.json';
import { Species } from 'src/species/species.model';
import { SpeciesService } from 'src/species/species.service';
import { LOCATIONS } from './data/locations.json';
import { Location } from 'src/locations/location.model';
import { LocationsService } from 'src/locations/locations.service';

@Injectable()
export class SeederService {
  constructor(
    private readonly vehiclesService: VehiclesService,
    private readonly filmsService: FilmsService,
    private readonly peopleService: PeopleService,
    private readonly speciesService: SpeciesService,
    private readonly locationsService: LocationsService,
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

  private async seedLocations() {
    for (const {
      id,
      name,
      climate,
      terrain,
      surface_water,
      films,
      residents,
    } of LOCATIONS) {
      const seedLocation = new Location();

      seedLocation.id = id;
      seedLocation.name = name;
      seedLocation.terrain = terrain;
      seedLocation.climate = climate;
      seedLocation.surface_water = surface_water;

      const seedFilms = films
        ? await Promise.all(films.map((film) => this.filmsService.find(film)))
        : null;

      if (seedFilms) {
        seedLocation.films = seedFilms;
      }

      const seedResidents = residents
        ? await Promise.all(
            residents.map((resident) => this.peopleService.find(resident)),
          )
        : null;

      if (seedResidents) {
        seedLocation.residents = seedResidents;
      }

      await this.locationsService.save(seedLocation);
    }
  }

  private async seedPeople() {
    for (const {
      id,
      name,
      age,
      gender,
      eye_color,
      hair_color,
      films,
      species,
    } of PEOPLE) {
      const seedPerson = new Person();

      seedPerson.id = id;
      seedPerson.name = name;
      seedPerson.age = age;
      seedPerson.gender = gender;
      seedPerson.eye_color = eye_color;
      seedPerson.hair_color = hair_color;
      seedPerson.species = await this.speciesService.find(species);

      const seedFilms = films
        ? await Promise.all(films.map((film) => this.filmsService.find(film)))
        : null;

      if (seedFilms) {
        seedPerson.films = seedFilms;
      }

      await this.peopleService.save(seedPerson);
    }
  }

  private async seedSpecies() {
    for (const {
      id,
      name,
      classification,
      eye_colors,
      hair_colors,
      films,
    } of SPECIES) {
      const seedSpecie = new Species();

      seedSpecie.id = id;
      seedSpecie.name = name;
      seedSpecie.classification = classification;
      seedSpecie.eye_colors = hair_colors;
      seedSpecie.hair_colors = eye_colors;

      const seedFilms = films
        ? await Promise.all(films.map((film) => this.filmsService.find(film)))
        : null;

      if (seedFilms) {
        seedSpecie.films = seedFilms;
      }

      await this.speciesService.save(seedSpecie);
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
      pilot,
    } of VEHICLES) {
      const seedVehicle = new Vehicle();

      seedVehicle.id = id;
      seedVehicle.name = name;
      seedVehicle.description = description;
      seedVehicle.vehicle_class = vehicle_class;
      seedVehicle.length = length;
      seedVehicle.film = await this.filmsService.find(film);
      seedVehicle.pilot = await this.peopleService.find(pilot);

      await this.vehiclesService.save(seedVehicle);
    }
  }

  async seed() {
    console.log('Beginning seed.');

    console.log('Seeding films...');
    await this.seedFilms();

    console.log('Seeding species...');
    await this.seedSpecies();

    console.log('Seeding people...');
    await this.seedPeople();

    console.log('Seeding locations...');
    await this.seedLocations();

    console.log('Seeding vehicles...');
    await this.seedVehicles();

    console.log('Done seeding!');
  }
}
