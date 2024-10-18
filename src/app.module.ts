import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/entities/admin.entity";
import { AuthModule } from "./auth/auth.module";
import { WorkersModule } from "./workers/workers.module";
import { Worker } from "./workers/entities/worker.entity";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/entities/role.entity";
import { WorkerRoleModule } from "./worker_role/worker_role.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TypeModule } from "./type/type.module";
import { BreedModule } from "./breed/breed.module";
import { MedicalHistoryModule } from "./medical_history/medical_history.module";
import { MedicalProceduresModule } from "./medical_procedures/medical_procedures.module";
import { Breed } from "./breed/entities/breed.entity";
import { Type } from "./type/entities/type.entity";
import { MedicalHistory } from "./medical_history/entities/medical_history.entity";
import { MedicalProcedure } from "./medical_procedures/entities/medical_procedure.entity";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: [
        Admin,
        Worker,
        Role,
        Breed,
        Type,
        MedicalHistory,
        MedicalProcedure,
      ],
      synchronize: true,
      autoLoadEntities: true,
      logging: false,
    }),
    AdminModule,
    AuthModule,
    WorkersModule,
    RolesModule,
    WorkerRoleModule,
    TypeModule,
    BreedModule,
    MedicalHistoryModule,
    MedicalProceduresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
