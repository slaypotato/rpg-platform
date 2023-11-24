import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/')
@ApiTags('root')
export class AppController {
  constructor() {}

  @ApiResponse({
    status: 200,
    description: 'Health check',
  })
  @Get()
  getHello(): string {
    return `Healthcheck on Port`;
  }
}
