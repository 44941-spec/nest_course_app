import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpCode, UseGuards } from '@nestjs/common';
import { hash,genSalt } from 'bcrypt';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { User } from '../generated/prisma/client';
import { CreateUserDto } from '../generated/nestjs-dto/user/dto/create-user.dto';
import { UpdateUserDto } from '../generated/nestjs-dto/user/dto/update-user.dto';
import { SignInDto } from './dto/signin.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('signup')
  @HttpCode(201)
  async create(@Body() userData: CreateUserDto): Promise<User | any> {
    await this.authService.signUp(userData);
    return { message: "registration success" };
  }

  @Post('signin')
  @HttpCode(200)
  async login(@Body() signInData: SignInDto) {
    return await this.authService.signIn(signInData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req: any) {
    return await this.authService.getProfile(req.user.username);
  }
/*
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
*/
}
