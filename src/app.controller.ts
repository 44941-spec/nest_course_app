import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/name')
  getName(): string {
    return this.appService.getName();
  }
  @Get('/love')
  getLove(): string {
    return this.appService.getLove();
  }
  @Get('/mesmerizer')
  getMesmerizer(): string {
    return this.appService.getMesmerizer();
  }
  @Get('/json')
  getJson(): object {
    return this.appService.getJson();
  }
}
