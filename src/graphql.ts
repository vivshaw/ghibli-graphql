
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
    vehicles(): Vehicle[] | Promise<Vehicle[]>;
    vehicle(id: string): Vehicle | Promise<Vehicle>;
}

export interface Vehicle {
    id: string;
    name: string;
    description: string;
    vehicle_class: string;
    length: number;
}
