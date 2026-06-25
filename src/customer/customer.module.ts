import { Module } from '@nestjs/common';
//import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CustomerController],
  providers: [PrismaService]
})
export class CustomerModule {}
