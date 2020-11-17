
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
}
