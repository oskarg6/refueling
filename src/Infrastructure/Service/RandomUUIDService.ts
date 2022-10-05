import { randomUUID } from "crypto";
import { RandomUUIDServiceInterface as CreateUserUseCase } from '../../Application/UseCase/CreateUser/RandomUUIDServiceInterface';

export class RandomUUIDService implements CreateUserUseCase
{
    createUUID(): string {
        return randomUUID();
    }
}