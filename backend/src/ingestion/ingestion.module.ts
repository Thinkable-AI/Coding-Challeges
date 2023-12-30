import { Module } from '@nestjs/common';

import { IngestionService } from './services/ingestion.service';

@Module({
  providers: [IngestionService],
})
export class IngestionModule {}
