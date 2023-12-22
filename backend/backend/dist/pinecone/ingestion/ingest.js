"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const ingestion_module_1 = require("./ingestion.module");
const ingestion_service_1 = require("./services/ingestion.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(ingestion_module_1.IngestionModule);
    const fileIngestionService = app.get(ingestion_service_1.IngestionService);
    const filePath = 'public/docs';
    try {
        await fileIngestionService.ingestFiles(filePath);
        console.log('Ingestion complete');
    }
    catch (error) {
        console.error('Error during ingestion', error);
    }
    await app.close();
}
bootstrap();
//# sourceMappingURL=ingest.js.map