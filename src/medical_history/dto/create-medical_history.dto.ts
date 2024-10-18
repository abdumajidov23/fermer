export class CreateMedicalHistoryDto {
  animal_id: number;
  condition: string;
  treatment: string;
  date_of_diagnosis: Date;
  date_of_recovery: Date;
  medical_procedure_id: number;
}
