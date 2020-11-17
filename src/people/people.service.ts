import { Injectable } from '@nestjs/common';
import { PEOPLE }  from "./data/people.json";

@Injectable()
export class PeopleService {
  people = PEOPLE;

  getPeople(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.people);
    })
  }

  getPersonById(id: String): Promise<any> {
    return new Promise(resolve => {
      resolve(this.people.find(person => person.id === id));
    })
  }

  getPersonByVehicleId(id: string): Promise<any> {
    return new Promise(resolve => {
      resolve(this.people.find(person => person.pilotOf.includes(id)))
    })
  }
}
