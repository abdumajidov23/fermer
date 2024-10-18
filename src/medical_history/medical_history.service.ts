import { Injectable } from "@nestjs/common";
import { CreateMedicalHistoryDto } from "./dto/create-medical_history.dto";
import { UpdateMedicalHistoryDto } from "./dto/update-medical_history.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { MedicalHistory } from "./entities/medical_history.entity";
import { Repository } from "typeorm";

@Injectable()
export class MedicalHistoryService {
  constructor(
    @InjectRepository(MedicalHistory)
    private readonly medicalHistoryRepo: Repository<MedicalHistory>
  ) {}
  async create(createMedicalHistoryDto: CreateMedicalHistoryDto) {
    const medicalHistory = this.medicalHistoryRepo.create(
      createMedicalHistoryDto
    );
    return await this.medicalHistoryRepo.save(medicalHistory);
  }

  findAll() {
    return this.medicalHistoryRepo.find();
  }

  findOne(id: number) {
    return this.medicalHistoryRepo.findOne({ where: { id } });
  }

  update(id: number, updateMedicalHistoryDto: UpdateMedicalHistoryDto) {
    return this.medicalHistoryRepo.update(id, updateMedicalHistoryDto);
  }

  remove(id: number) {
    return this.medicalHistoryRepo.delete(id);
  }
}
