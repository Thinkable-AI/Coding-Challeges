import { Injectable } from '@nestjs/common';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { pinecone } from '../../../shared/libs/pinecone'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';

@Injectable()
export class IngestionService {
  async ingestFiles(filePath: string): Promise<void> {
    try {
      const rawDocs = await this.loadRawDocs(filePath);
      const docs = await this.splitDocs(rawDocs);
      await this.createVectorStore(docs);
    } catch (error) {
      console.log('Error', error);
      throw new Error('Failed to ingest your data');
    }
  }
  

  private async loadRawDocs(filePath: string): Promise<any> {
    const directoryLoader = new DirectoryLoader(filePath, {
      '.pdf': (path) => new PDFLoader(path),
    });
    return await directoryLoader.load();
  }

  private async splitDocs(rawDocs: any): Promise<any[]> {
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
  
    return await textSplitter.splitDocuments(rawDocs);
  }
  

  private async createVectorStore(docs: any): Promise<void> {
  console.log('Creating vector store...');
  console.log('Docs:', docs); 

  if (!Array.isArray(docs)) {
    console.error('Error: "docs" is not an array.');
    throw new Error('Invalid format of input documents.');
  }

  const embeddings = new OpenAIEmbeddings();
  if (!process.env.PINECONE_INDEX_NAME) {
    throw new Error('Missing Pinecone index name in .env file');
  }
  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME);

  await PineconeStore.fromDocuments(docs, embeddings, {
    pineconeIndex: index,
    textKey: 'text',
  });
}

}
