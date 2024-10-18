import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Worker {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 100 })
  full_name: string;

  @Field()
  @Column()
  birth_date: string;

  @Field()
  @Column()
  experience: number;

  @Field()
  @Column({ unique: true, length: 150 })
  email: string;

  @Field({ nullable: true })
  @Column({ length: 20, nullable: true })
  phone_number?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  tg_link?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  hashed_password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  hashed_refresh_token: string;

  @Field({ defaultValue: true })
  @Column({ default: true })
  is_active?: boolean;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @Field(() => [Role])
  @ManyToMany(() => Role, (role) => role.workers)
  @JoinTable()
  roles: Role[];
}
