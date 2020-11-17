
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
    release_date: number;
    rt_score: number;
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
}

export interface Person {
    id: string;
    name: string;
    gender: string;
    age: number;
    eye_color: string;
    hair_color: string;
}

export interface Species {
    id: string;
    name: string;
    classification: string;
    eye_colors: string;
    hair_colors: string;
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
