import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { createLogger, format, Logger } from 'winston';

@Injectable()
export class LoggerService {
  private readonly logger: Logger;
  private context: string;

  constructor() {
    this.logger = createLogger({
      transports: [
        new winston.transports.Console({
          format: format.json(),
        }),
      ],
    });
  }

  error(message: string): void {
    this.logger.error(message, JSON.stringify({ context: this.context }));
  }

  log(message: string): void {
    this.logger.log(message, JSON.stringify({ context: this.context }));
  }

  warn(message: string): void {
    this.logger.warn(message, { context: this.context });
  }

  info(message: string): void {
    this.logger.info(message, { context: this.context });
  }
}
