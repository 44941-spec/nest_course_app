import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';
import { User } from '../generated/prisma/client';
import { CreateUserDto } from '../generated/nestjs-dto/user/dto/create-user.dto';
import { UpdateUserDto } from '../generated/nestjs-dto/user/dto/update-user.dto';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) { }

  async signUp(userData: CreateUserDto) {
    const existedUser = await this.prismaService.user.findUnique({
      where: {
        username: userData.username
      }
    });

    if (existedUser) {
      throw new BadRequestException('This account is already existed.');
    }
    else {
      const salt = await bcrypt.genSalt(12);
      const hashPassword = await bcrypt.hash(userData.password, salt);

      return this.prismaService.user.create({
        data: {
          username: userData.username,
          email: userData.email,
          password: hashPassword
        },
      });
    }
  }

  async signIn(signInData: SignInDto) {
  const user = await this.prismaService.user.findUnique({
    where: {
      username: signInData.username
    }
  });
  const authorized = (!user) ? false : await bcrypt.compare(signInData.password, user.password);
  if (!authorized) {
    throw new UnauthorizedException('wrong credential');
  }
  // TODO: generate JWT token
}
}