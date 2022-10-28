import { Injectable } from "@nestjs/common";
import { CreateRegisterDTO } from "./dto/createRegister.dto";
import { UpdateRegisterDTO } from "./dto/updateRegister.dto";

@Injectable()
export class RegisterService {
  async create(req: CreateRegisterDTO): Promise<string> {
    return `Cliente ${req.name} cadastrado com sucesso!`;
  }

  async findAll(): Promise<string> {
    return "Lista de usuários.";
  }

  async findOne (id: number): Promise<string> {
    return `Usuário ${id}!`;
  }

  async update(id: number, req: UpdateRegisterDTO): Promise<string> {
    return `Usuário ${id} atualizado com sucesso!`;
  }

  async remove(id: number): Promise<string> {
    return `Usuário ${id} deletado com sucesso!`;
  }
  
}