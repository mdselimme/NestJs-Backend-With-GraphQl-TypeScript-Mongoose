import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URL}`, {
      onConnectionCreate: (connection: Connection) => {
        connection.on('connected', () => console.log('db connected'));
        connection.on('disconnected', () => console.log('db disconnected'));
        connection.on('reconnected', () => console.log('db reconnected'));
        connection.on('disconnecting', () => console.log('db disconnecting'));
        return connection;
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
