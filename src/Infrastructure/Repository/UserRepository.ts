import { FindCursor } from 'mongodb';
import { UserRepositoryInterface as CreateUserUseCase } from '../../Application/UseCase/CreateUser/UserRepositoryInterface';
import { UserRepositoryInterface as GetAllUserUseCase } from '../../Application/UseCase/GetAllUser/UserRepositoryInterface';
import { UserRepositoryInterface as GetUserUseCase } from '../../Application/UseCase/GetUser/UserRepositoryInterface';
import { User } from '../../Domain/Entity/User';
import { BaseRepository } from './BaseRepository';

export class UserRepository extends BaseRepository implements CreateUserUseCase, GetAllUserUseCase, GetUserUseCase
{
    async getByUid(uid: String): Promise<User> {
        const documents = (await this.collection()).find({uid: uid}).toArray();

        const userList = (await documents).map((document) => {
            return new User(document.uid, document.name);
        });

        return userList[0];
    }
    protected collectionName(): string {
        return 'user';
    }

    async save(user: User): Promise<void> {
        (await this.collection()).insertOne(user);
    }

    async getAll(): Promise<User[]> {
        const documents = (await this.collection()).find({}).toArray();

        return (await documents).map((document) => {
            return new User(document.uid, document.name);
        });
    }
}