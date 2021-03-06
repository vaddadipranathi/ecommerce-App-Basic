/* eslint-disable prettier/prettier */
import { LoggerService } from '@nestjs/common';

/**
 * Starting of LoggerService
 */
export class Logger implements LoggerService {
  log(message: string) {
    console.log(message);
  }
  error(message: string) {
    console.error(message);
  }
  warn(message: string) {
    console.warn(message);
  }
}


