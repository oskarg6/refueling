"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClientFactory = void 0;
const mongodb_1 = require("mongodb");
class MongoClientFactory {
    static createClient() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                this.client = yield this.createAndConnectClient();
            }
            return this.client;
        });
    }
    static createAndConnectClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME;
            const client = new mongodb_1.MongoClient(url, { ignoreUndefined: true });
            yield client.connect();
            return client;
        });
    }
}
exports.MongoClientFactory = MongoClientFactory;
