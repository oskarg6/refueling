import { UserRepositoryInterface as CreateUserUseCase } from '../../Application/UseCase/CreateUser/UserRepositoryInterface';
import { User } from '../../Domain/Entity/User';
import { BaseRepository } from './BaseRepository';

export class UserRepository extends BaseRepository implements CreateUserUseCase
{
    protected collectionName(): string {
        return 'user';
    }

    async save(user: User): Promise<void> {
        (await this.collection()).insertOne(user);
        console.log('user ' + user.name + ' saved');
    }
}