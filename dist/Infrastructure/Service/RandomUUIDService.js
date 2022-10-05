"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomUUIDService = void 0;
const crypto_1 = require("crypto");
class RandomUUIDService {
    createUUID() {
        return (0, crypto_1.randomUUID)();
    }
}
exports.RandomUUIDService = RandomUUIDService;
