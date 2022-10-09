import { describe, expect, it } from 'vitest';
import { UserRepositoryInterface } from '../../../src/Application/UseCase/GetUser/UserRepositoryInterface';
import { GetUserUseCase } from '../../../src/Application/UseCase/GetUser/GetUserUseCase';
import { User } from '../../../src/Domain/Entity/User';

class UserRepository implements UserRepositoryInterface
{
    getByUid(uid: String): Promise<User> {
        return new Promise((resolve, reject) => {
            resolve(new User(
                'testUID',
                'testName'
            ));

            reject('error connection');
        });
    }
}

describe('Get User by UID Use Case', () => {
    it('execute', () => {
        const userRepository = new UserRepository();
  
        const useCase = new GetUserUseCase(
            userRepository,
        );
    
        const user = useCase.execute('testUID');

        expect(user).toBeInstanceOf(User);
    })
})