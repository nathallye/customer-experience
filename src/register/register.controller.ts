import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { CreateRegisterDTO } from "./dto/createRegister.dto";
import { UpdateRegisterDTO } from "./dto/updateRegister.dto";
import { RegisterService } from "./register.service";

@Controller("register")
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Body() req: CreateRegisterDTO) {
    return this.registerService.create(req);
  }

  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: number) {
    return this.registerService.findOne(id);
  }
  
  @Patch(":id")
  update(@Param("id", ParseUUIDPipe) id: number, @Body() req: UpdateRegisterDTO) {
    return this.registerService.update(id, req);
  }

  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: number) {
    return this.registerService.remove(id);
  }
}
