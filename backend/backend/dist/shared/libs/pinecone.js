"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinecone = void 0;
const pinecone_1 = require("@pinecone-database/pinecone");
if (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {
    throw new Error("Pinecone environment or api key vars missing");
}
function initPinecone() {
    var _a, _b;
    try {
        const pinecone = new pinecone_1.Pinecone({
            environment: (_a = process.env.PINECONE_ENVIRONMENT) !== null && _a !== void 0 ? _a : "",
            apiKey: (_b = process.env.PINECONE_API_KEY) !== null && _b !== void 0 ? _b : "",
        });
        return pinecone;
    }
    catch (error) {
        console.log("error", error);
        throw new Error("Failed to initialize Pinecone Client");
    }
}
exports.pinecone = initPinecone();
//# sourceMappingURL=pinecone.js.map