import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { MedicalHistoryService } from "./medical_history.service";
import { CreateMedicalHistoryDto } from "./dto/create-medical_history.dto";
import { UpdateMedicalHistoryDto } from "./dto/update-medical_history.dto";

@Controller("medical-history")
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) {}

  @Post("create")
  create(@Body() createMedicalHistoryDto: CreateMedicalHistoryDto) {
    return this.medicalHistoryService.create(createMedicalHistoryDto);
  }

  @Get("get")
  findAll() {
    return this.medicalHistoryService.findAll();
  }

  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.medicalHistoryService.findOne(+id);
  }

  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateMedicalHistoryDto: UpdateMedicalHistoryDto
  ) {
    return this.medicalHistoryService.update(+id, updateMedicalHistoryDto);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.medicalHistoryService.remove(+id);
  }
}
