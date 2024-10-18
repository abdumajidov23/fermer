import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MedicalHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  animal_id: number;

  @Column()
  condition: string;

  @Column()
  treatment: string;

  @Column()
  date_of_diagnosis: Date;

  @Column()
  date_of_recovery: Date;

  @Column()
  medical_procedure_id: number;
}
