"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const text_splitter_1 = require("langchain/text_splitter");
const openai_1 = require("langchain/embeddings/openai");
const pinecone_1 = require("langchain/vectorstores/pinecone");
const pinecone_2 = require("../libs/pinecone");
const pdf_1 = require("langchain/document_loaders/fs/pdf");
const directory_1 = require("langchain/document_loaders/fs/directory");
const filePath = "public/docs";
const run = async () => {
    try {
        const directoryLoader = new directory_1.DirectoryLoader(filePath, {
            ".pdf": (path) => new pdf_1.PDFLoader(path),
        });
        const rawDocs = await directoryLoader.load();
        const textSplitter = new text_splitter_1.RecursiveCharacterTextSplitter({
            chunkSize: 1000,
            chunkOverlap: 200,
        });
        const docs = await textSplitter.splitDocuments(rawDocs);
        console.log("split docs", docs);
        console.log("creating vector store...");
        const embeddings = new openai_1.OpenAIEmbeddings();
        if (!process.env.PINECONE_INDEX_NAME) {
            throw new Error("Missing Pinecone index name in .env file");
        }
        const index = pinecone_2.pinecone.Index(process.env.PINECONE_INDEX_NAME);
        await pinecone_1.PineconeStore.fromDocuments(docs, embeddings, {
            pineconeIndex: index,
            textKey: "text",
        });
    }
    catch (error) {
        console.log("error", error);
        throw new Error("Failed to ingest your data");
    }
};
exports.run = run;
(async () => {
    await (0, exports.run)();
    console.log("ingestion complete");
})();
//# sourceMappingURL=ingest-data.js.map