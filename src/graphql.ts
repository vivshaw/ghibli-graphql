
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Film {
    id: string;
    title: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    rt_score: number;
    people: Person[];
    species: Species[];
    locations?: Location[];
    vehicles?: Vehicle[];
}

export interface IQuery {
    films(): Film[] | Promise<Film[]>;
    film(id: string): Film | Promise<Film>;
    locations(): Location[] | Promise<Location[]>;
    location(id: string): Location | Promise<Location>;
    people(): Person[] | Promise<Person[]>;
    person(id: string): Person | Promise<Person>;
    species(): Species[] | Promise<Species[]>;
    specie(id: string): Species | Promise<Species>;
    vehicles(): Vehicle[] | Promise<Vehicle[]>;
    vehicle(id: string): Vehicle | Promise<Vehicle>;
}

export interface Location {
    id: string;
    name: string;
    climate: string;
    terrain: string;
    surface_water: number;
    films: Film[];
    residents?: Person[];
}

export interface Person {
    id: string;
    name: string;
    gender: string;
    age: string;
    eye_color: string;
    hair_color: string;
    films: Film[];
    species: Species;
}

export interface Species {
    id: string;
    name: string;
    classification: string;
    eye_colors: string;
    hair_colors: string;
    films: Film[];
    people: Person[];
}

export interface Vehicle {
    id: string;
    name: string;
    description: string;
    vehicle_class: string;
    length: number;
    pilot: Person;
    film: Film;
}
