import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MedicalProcedure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  cost: number;
}
