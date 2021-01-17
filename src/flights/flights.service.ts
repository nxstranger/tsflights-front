import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Flight} from "./entities/flight.entity";
import { Repository } from 'typeorm';

@Injectable()
export class FlightsService {
  constructor(
      @InjectRepository(Flight)
      private flightRepository: Repository<Flight>,
  ) {}
  async findAll() {
    return this.flightRepository.find();
  }

  async findOne(id: number) {
    return this.flightRepository.findOne(id);
  }

  async create(createFlightDto: CreateFlightDto): Promise<Flight> {
    return this.flightRepository.save(createFlightDto);
  }

  async update(id: number, updateFlightDTO: UpdateFlightDto): Promise<Flight> {
    await this.flightRepository.update(id, updateFlightDTO);
    return this.flightRepository.findOne(id);
  }

  async remove(id: number) {
    return this.flightRepository.delete(id);
  }
}
