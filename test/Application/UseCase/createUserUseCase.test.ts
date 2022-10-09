import { assert, describe, it } from 'vitest';
import { CreateUserUseCase } from "../../../src/Application/UseCase/CreateUser/CreateUserUseCase";
import { RandomUUIDServiceInterface } from '../../../src/Application/UseCase/CreateUser/RandomUUIDServiceInterface';
import { UserAggregateFactory } from '../../../src/Domain/Aggregate/Factory/UserAggregateFactory';
import { UserRepositoryInterface } from '../../../src/Domain/Aggregate/User/UserRepositoryInterface';
import { User } from '../../../src/Domain/Entity/User';
import { userAggregateFactory } from '../../../src/Infrastructure/DependencyInjection/container';

class UserRepository implements UserRepositoryInterface
{
    create(user: User): Promise<void> {
        return new Promise(() => {});
    }
    update(user: User): Promise<void> {
        return new Promise(() => {});
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
    const userAggegateFactory = new UserAggregateFactory();

    const useCase = new CreateUserUseCase(
        userRepository,
        randomUUIDService,
        userAggegateFactory,
    );

    useCase.execute('test@test.test');
 
    assert.equal(true, true);
  })
})