import { Injectable } from "@nestjs/common";
import { CreateMedicalProcedureDto } from "./dto/create-medical_procedure.dto";
import { UpdateMedicalProcedureDto } from "./dto/update-medical_procedure.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { MedicalProcedure } from "./entities/medical_procedure.entity";
import { Repository } from "typeorm";

@Injectable()
export class MedicalProceduresService {
  constructor(
    @InjectRepository(MedicalProcedure)
    private readonly medicalProcedureRepo: Repository<MedicalProcedure>
  ) {}
  async create(createMedicalProcedureDto: CreateMedicalProcedureDto) {
    const medicalProcedure = this.medicalProcedureRepo.create(
      createMedicalProcedureDto
    );
    return await this.medicalProcedureRepo.save(medicalProcedure);
  }

  findAll() {
    return this.medicalProcedureRepo.find();
  }

  findOne(id: number) {
    return this.medicalProcedureRepo.findOne({ where: { id } });
  }

  update(id: number, updateMedicalProcedureDto: UpdateMedicalProcedureDto) {
    return this.medicalProcedureRepo.update(id, updateMedicalProcedureDto);
  }

  remove(id: number) {
    return this.medicalProcedureRepo.delete(id);
  }
}
