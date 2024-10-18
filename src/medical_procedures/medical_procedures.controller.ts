import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { MedicalProceduresService } from "./medical_procedures.service";
import { CreateMedicalProcedureDto } from "./dto/create-medical_procedure.dto";
import { UpdateMedicalProcedureDto } from "./dto/update-medical_procedure.dto";

@Controller("medical-procedures")
export class MedicalProceduresController {
  constructor(
    private readonly medicalProceduresService: MedicalProceduresService
  ) {}

  @Post("create")
  create(@Body() createMedicalProcedureDto: CreateMedicalProcedureDto) {
    return this.medicalProceduresService.create(createMedicalProcedureDto);
  }

  @Get("get")
  findAll() {
    return this.medicalProceduresService.findAll();
  }

  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.medicalProceduresService.findOne(+id);
  }

  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateMedicalProcedureDto: UpdateMedicalProcedureDto
  ) {
    return this.medicalProceduresService.update(+id, updateMedicalProcedureDto);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.medicalProceduresService.remove(+id);
  }
}
