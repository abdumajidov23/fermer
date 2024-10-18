import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
// import { CustomValidationPipe } from './pipe/validation.pipe';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";
import { ConfigService } from "@nestjs/config";

async function startApp() {
  try {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);
    const PORT = config.get<number>("API_PORT");
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    // app.useGlobalPipes(new CustomValidationPipe());

    // const config = new DocumentBuilder()
    //   .setTitle('Fermer')
    //   .setDescription('Fermer Project REST API')
    //   .setVersion('1.0')
    //   .addTag(
    //     'NestJs, Validation, swagger, guard, typeORM, pg, miler, bot ,sms, cookie ...',
    //   )
    //   .build();
    // const document = SwaggerModule.createDocument(app, config);
    // SwaggerModule.setup('docs', app, document);

    await app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
startApp();
