import { Injectable } from "@nestjs/common";
import { CreateBreedDto } from "./dto/create-breed.dto";
import { UpdateBreedDto } from "./dto/update-breed.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Breed } from "./entities/breed.entity";
import { Repository } from "typeorm";

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(Breed) private readonly breedRepo: Repository<Breed>
  ) {}
  async create(createBreedDto: CreateBreedDto) {
    const breed = this.breedRepo.create(createBreedDto);
    return await this.breedRepo.save(breed);
  }

  findAll() {
    return this.breedRepo.find();
  }

  findOne(id: number) {
    return this.breedRepo.findOne({ where: { id } });
  }

  update(id: number, updateBreedDto: UpdateBreedDto) {
    return this.breedRepo.update(id, updateBreedDto);
  }

  remove(id: number) {
    return this.breedRepo.delete(id);
  }
}
