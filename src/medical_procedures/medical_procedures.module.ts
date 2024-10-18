import { Module } from "@nestjs/common";
import { MedicalProceduresService } from "./medical_procedures.service";
import { MedicalProceduresController } from "./medical_procedures.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MedicalProcedure } from "./entities/medical_procedure.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MedicalProcedure])],
  controllers: [MedicalProceduresController],
  providers: [MedicalProceduresService],
})
export class MedicalProceduresModule {}
