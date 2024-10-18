import { Injectable } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Type } from "./entities/type.entity";
import { Repository } from "typeorm";

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type) private readonly typeRepo: Repository<Type>
  ) {}
  async create(createTypeDto: CreateTypeDto) {
    const type = this.typeRepo.create(createTypeDto);
    return await this.typeRepo.save(type);
  }

  findAll() {
    return this.typeRepo.find();
  }

  findOne(id: number) {
    return this.typeRepo.findOne({ where: { id } });
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return this.typeRepo.update(id, updateTypeDto);
  }

  remove(id: number) {
    return this.typeRepo.delete(id);
  }
}
