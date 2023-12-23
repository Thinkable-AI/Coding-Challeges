import { Module } from '@nestjs/common';

import { IngestionService } from './services/ingestion.service';

@Module({
  imports:[IngestionModule],
  providers: [IngestionService],
})
export class IngestionModule {}
