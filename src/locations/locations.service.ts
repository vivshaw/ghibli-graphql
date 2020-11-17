import { Injectable } from '@nestjs/common';
import { LOCATIONS }  from "./data/locations.json";

@Injectable()
export class LocationsService {
  locations = LOCATIONS;

  getLocations(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.locations);
    })
  }

  getLocationById(id: String): Promise<any> {
    return new Promise(resolve => {
      resolve(this.locations.find(film => film.id === id));
    })
  }
}
