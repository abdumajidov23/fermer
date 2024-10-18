import { PartialType } from "@nestjs/swagger";
import { CreateMedicalProcedureDto } from "./create-medical_procedure.dto";

export class UpdateMedicalProcedureDto extends PartialType(
  CreateMedicalProcedureDto
) {}
