import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {
    message: string,
    version: number
  } {
    return {
      message: "Hello From Mongoose with graphql Nest Js",
      version: 0.1
    };
  }
}
