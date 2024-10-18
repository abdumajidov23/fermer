import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BreedService } from "./breed.service";
import { CreateBreedDto } from "./dto/create-breed.dto";
import { UpdateBreedDto } from "./dto/update-breed.dto";

@Controller("breed")
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  @Post("create")
  create(@Body() createBreedDto: CreateBreedDto) {
    return this.breedService.create(createBreedDto);
  }

  @Get("get")
  findAll() {
    return this.breedService.findAll();
  }

  @Get("get/:id")
  findOne(@Param("id") id: string) {
    return this.breedService.findOne(+id);
  }

  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateBreedDto: UpdateBreedDto) {
    return this.breedService.update(+id, updateBreedDto);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.breedService.remove(+id);
  }
}
