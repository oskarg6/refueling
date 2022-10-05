"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.randomUUIDService = exports.mongoClient = void 0;
const RandomUUIDService_1 = require("./../Service/RandomUUIDService");
const MongoClientFactory_1 = require("../Persistence/MongoClientFactory");
const UserRepository_1 = require("../Repository/UserRepository");
/** INFRASTRUCTURE PERSISTENCE */
exports.mongoClient = MongoClientFactory_1.MongoClientFactory.createClient();
/** INFRASTRUCTURE SERVICES */
exports.randomUUIDService = new RandomUUIDService_1.RandomUUIDService();
/** INFRASTRUCTUCTURE REPOSITRIES */
exports.userRepository = new UserRepository_1.UserRepository(exports.mongoClient);
