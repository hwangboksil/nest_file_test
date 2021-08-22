import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { multerOptions } from './lib/multerOptions';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseInterceptors(FileInterceptor('file', multerOptions))
  @Post('upload')
  uploadFile(
    @UploadedFile() file: Express.Multer.File) 
    {
    console.log(file)
    return 'FILE_UPLOAD_SUCCESS'
  }
}
