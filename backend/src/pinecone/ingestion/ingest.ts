import { NestFactory } from '@nestjs/core';
import { IngestionModule } from './ingestion.module';
import { IngestionService } from './services/ingestion.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(IngestionModule);
  const fileIngestionService = app.get(IngestionService);

  const filePath = 'public/docs';
  try {
    await fileIngestionService.ingestFiles(filePath);
    console.log('Ingestion complete');
  } catch (error) {
    console.error('Error during ingestion', error);
  }

  await app.close();
}

bootstrap();
