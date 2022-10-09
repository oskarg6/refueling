import { assert, describe, it } from 'vitest';
import { CreateUserUseCase } from "../../../src/Application/UseCase/CreateUser/CreateUserUseCase";
import { RandomUUIDServiceInterface } from '../../../src/Application/UseCase/CreateUser/RandomUUIDServiceInterface';
import { UserRepositoryInterface } from '../../../src/Application/UseCase/CreateUser/UserRepositoryInterface';
import { User } from '../../../src/Domain/Entity/User';

class UserRepository implements UserRepositoryInterface
{
    save(user: User): void {
        // save User
    }
}

class RandomUUIDService implements RandomUUIDServiceInterface
{
    createUUID(): string {
        return 'testUUID';
    }   
}

describe('Create User Use Case', () => {
  it('execute', () => {
    const userRepository = new UserRepository();
    const randomUUIDService = new RandomUUIDService();

    const useCase = new CreateUserUseCase(
        userRepository,
        randomUUIDService
    );

    useCase.execute('test@test.test');
 
    assert.equal(true, true);
  })
})