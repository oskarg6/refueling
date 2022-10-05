import { RandomUUIDService } from './../Service/RandomUUIDService';
import { MongoClientFactory } from '../Persistence/MongoClientFactory';
import { UserRepository } from '../Repository/UserRepository';

/** INFRASTRUCTURE PERSISTENCE */
export const mongoClient = MongoClientFactory.createClient();

/** INFRASTRUCTURE SERVICES */
export const randomUUIDService = new RandomUUIDService();

/** INFRASTRUCTUCTURE REPOSITRIES */
export const userRepository = new UserRepository(mongoClient);