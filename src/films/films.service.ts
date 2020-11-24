import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './film.model';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)
    private filmRepository: Repository<Film>,
  ) {}

  async all(): Promise<Film[]> {
    return this.filmRepository.find({ relations: ['vehicles', 'people'] });
  }

  async find(id: string): Promise<Film> {
    return this.filmRepository.findOne(id, {
      relations: ['vehicles', 'people'],
    });
  }

  async save(film: Film): Promise<Film> {
    return this.filmRepository.save(film);
  }
}
