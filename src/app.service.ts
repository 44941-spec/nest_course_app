import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Minecraft';
  }
  getName(): string {
    return'Karn Raman'
  }
  getLove(): string {
    return'Fan and air conditioner'
  }
  getJson(): object {
    return {
      name: 'Mahino',
      surname: 'Douka',
      age: 30e24
    }
  }
}
