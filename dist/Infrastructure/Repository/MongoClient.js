"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClient = void 0;
class MongoClient {
    getClient() {
        if (!this.client) {
            this.client = this.createClient();
        }
        return this.client;
    }
}
exports.MongoClient = MongoClient;
