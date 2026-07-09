import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { hash,genSalt } from 'bcrypt';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { User } from '../generated/prisma/client';
import { CreateUserDto } from '../generated/nestjs-dto/user/dto/create-user.dto';
import { UpdateUserDto } from '../generated/nestjs-dto/user/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create(@Body() userData: CreateUserDto): Promise<User> {
    const salt = await genSalt(12);
    const hashPasword = await hash(userData.password, salt);

    return this.prismaService.user.create({
      data : {
        username: userData.username,
        email: userData.email,
        password: hashPasword
      }
    });
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  @Delete(':username')
  async remove(@Param('username') username: string) {
    return this.prismaService.user.delete({
        where: {username: username }
    });
  }
}
