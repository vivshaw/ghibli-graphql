import { Injectable } from '@nestjs/common';
import { SPECIES }  from "./data/species.json";

@Injectable()
export class SpeciesService {
  species = SPECIES;

  getSpecies(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.species);
    })
  }

  getSpecieById(id: String): Promise<any> {
    return new Promise(resolve => {
      resolve(this.species.find(specie => specie.id === id));
    })
  }
}
