export declare class IngestionService {
    ingestFiles(filePath: string): Promise<void>;
    private loadRawDocs;
    private splitDocs;
    private createVectorStore;
}
