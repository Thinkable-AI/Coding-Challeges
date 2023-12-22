import { Test, TestingModule } from '@nestjs/testing';
import { ChatProcessingService } from './ChatProcessing.service';

describe('ChatProcessingService', () => {
  let service: ChatProcessingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatProcessingService],
    }).compile();

    service = module.get<ChatProcessingService>(ChatProcessingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
